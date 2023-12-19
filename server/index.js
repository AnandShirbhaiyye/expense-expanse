import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { getApiHealth } from "./controllers/health.js";
import { postApiTransaction, getApiTransaction, getApiTransactionById, getApiTransactionByUserId, deleteUserTransactionId } from "./controllers/transaction.js";
import { postApiLogin, postApiSignup } from "./controllers/user.js";

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

app.post('/signup', postApiSignup);

app.post('/login', postApiLogin);

app.post("/api/transaction", postApiTransaction);

app.get("/api/transactions", getApiTransaction);

app.get("/api/transactions/:id", getApiTransactionById);

app.get('/api/transactions/users/:id',getApiTransactionByUserId)

app.delete('/api/transactions/:id',deleteUserTransactionId)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
