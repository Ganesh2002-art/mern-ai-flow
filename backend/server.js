import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api", aiRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("🚀 API running...");
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🔥 Server running on port ${process.env.PORT}`);
});