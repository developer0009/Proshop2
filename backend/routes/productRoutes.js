import express from "express";
import Product from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";
const route = express.Router();
route.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
  })
);
route.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("product not found --try again");
    }
  })
);
export default route;
