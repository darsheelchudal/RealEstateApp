import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cors from "cors";
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
  });

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.listen(PORT, () => {
  console.log(`I am at server PORT : ${PORT}`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//Middleware
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
