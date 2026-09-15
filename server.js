import "dotenv/config";

import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import cropRoutes from "./routes/cropRoutes.js";
import offerRoutes from "./routes/offerRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import storageRoutes from "./routes/storageRoutes.js";
import priceRoutes from "./routes/priceRoutes.js";

import { connectDB, disconnectDB } from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "AgriConnect backend is running" });
});

app.use("/auth", authRoutes);
app.use("/crops", cropRoutes);
app.use("/offers", offerRoutes);
app.use("/transactions", transactionRoutes);
app.use("/storage", storageRoutes);
app.use("/prices", priceRoutes);

app.use(notFound);
app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`AgriConnect backend listening on http://localhost:${port}`);
});

const shutdown = async (signal) => {
  console.log(`${signal} received, shutting down gracefully`);
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
};

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  shutdown("unhandledRejection");
});
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  shutdown("uncaughtException");
});
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
