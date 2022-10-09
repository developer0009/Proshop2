import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import users from "./data/users.js";
import products from "./data/products.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
// { path: "../.env" }
dotenv.config();
console.log(process.env.MONGO_URL);
connectDb();
export const importData = async () => {
  try {
    console.log("importing...");
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    const allUsers = await User.insertMany(users);
    const userAdmin = allUsers.find((user) => user.isAdmin);
    const sampleProducts = products.map((product) => {
      return { ...product, user: userAdmin._id };
    });
    await Product.insertMany(sampleProducts);
    console.log("data imported successfully..");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
export const deleteData = async () => {
  await User.deleteMany();
  await Product.deleteMany();
  process.exit();
};
if (process.argv[2] === "-d") deleteData();
else importData();
