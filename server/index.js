// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler } from "./utils/error.js";
dotenv.config();

const app = express();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Error handling middleware
// app.use((error, req, res, next) => {
//   const statusCode = error.statusCode || 500;
//   const message = error.message || "Internal Server Error";
//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
