/* eslint-disable no-undef */
import express from "express";
import mongoose from "mongoose";
import movieRoute from "./src/routes/movieRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  return res.json("hello");
});
app.use("/api/v1/movie", movieRoute);

// MongoDB connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit the process if MongoDB connection fails
  });
