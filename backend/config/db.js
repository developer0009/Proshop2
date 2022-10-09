import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    const URL =
      process.env.MONGO_URL ||
      "mongodb+srv://uddin:uddin786@cluster0.4hej3x9.mongodb.net/7Cows?retryWrites=true&w=majority";
    await mongoose.connect(URL);
    //we could connect without db but when there is an error async and await could help
    console.log("connected succesfully at ", mongoose.connection.host);
  } catch (err) {
    console.log("error connecting to DB");
    console.log(err.message);
    process.exit(1);
  }
};
