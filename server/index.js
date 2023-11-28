import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Transaction from "./models/Transaction.js";

const app = express();
app.use(express.json());

async function connectMongoDB() {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn) {
      console.log("Connected to MongoDB📦");
    }
  }
connectMongoDB();

app.get('/health', async (req, res)=>{
  res.json({
    success: true,
    message:" All Good✅"
  })
})

app.post('/api/transaction', async (req, res)=>{
  const {amount, type, category, description} = req.body;

  const transaction = new Transaction ({
    amount,
    category,
    type,
    description
  });
  try{
    const savedTransaction = await transaction.save();

    return res.json({
      success: true,
      message: 'Transaction saved successfully',
      transaction: savedTransaction
    })
  }catch(err){
   return res.json({
    success: false,
    message: err.message
   })
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
});