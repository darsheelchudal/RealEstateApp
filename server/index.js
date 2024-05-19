import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { log } from "console";
dotenv.config();
const app = express();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MONGODB");
  })
  .catch((error) => {
    console.log(error);
    console.log("Helo");
  });

app.listen(PORT, () => {
  console.log(`I am at server PORT : ${PORT}`);
});
