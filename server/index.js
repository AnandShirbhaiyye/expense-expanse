import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import  { getApiHealth } from "./controllers/health.js";
import { postApiTransaction, getApiTransaction } from "./controllers/transaction.js";

const app = express();
app.use(express.json());

async function connectMongoDB() {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
  if (conn) {
    console.log("Connected to MongoDB📦");
  }
}
connectMongoDB();

app.get("/api/health", getApiHealth);

app.post("/api/transaction", postApiTransaction);

app.get("/api/transactions", getApiTransaction);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
