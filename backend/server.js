import express from "express";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/customMiddleWare.js";
import productRoute from "../backend/routes/productRoutes.js";
const app = express();
//for having global values
dotenv.config();
//connect to db
connectDb();
app.use("/api/products" , productRoute);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.port || 5000;
console.log(PORT);
app.listen(PORT, console.log("listening.."));
