import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { getApiHealth } from "./controllers/health.js";
import {
  postApiTransaction,
  getApiTransaction,
  getApiTransactionById,
  getApiTransactionByUserId,
  deleteUserTransactionId,
  updateUserTransaction,
} from "./controllers/transaction.js";
import { postApiLogin, postApiSignup } from "./controllers/user.js";

import path from 'path';

const __dirname = path.resolve();

const app = express();
app.use(express.json());

async function connectMongoDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn) {
      console.log("Connected to MongoDB📦");
    }
  } catch (e) {
    console.log(e.message);
  }
}
connectMongoDB();

app.get("/api/health", getApiHealth);

app.post("/signup", postApiSignup);

app.post("/login", postApiLogin);

app.post("/api/transaction", postApiTransaction);

app.get("/api/transactions", getApiTransaction);

app.get("/api/transactions/:id", getApiTransactionById);

app.get("/api/transactions/users/:id", getApiTransactionByUserId);

app.delete("/api/transactions/:id", deleteUserTransactionId);

app.put("/api/transactions/:id", updateUserTransaction);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
