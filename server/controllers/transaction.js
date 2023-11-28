import Transaction from "../models/Transaction.js";
import { responder } from "../util.js";

const postApiTransaction = async (req, res) => {
  const { amount, type, category, description } = req.body;

  const transaction = new Transaction({
    amount,
    category,
    type,
    description,
  });
  try {
    const savedTransaction = await transaction.save();

    return responder({
      res,
      success: true,
      message: "Transaction saved successfully",
      data: savedTransaction,
    });
  } catch (err) {
    return responder({
      res,
      success: false,
      message: err.message,
    });
  }
};

const getApiTransaction = async (req, res) => {
  const allTransactions = await Transaction.find();

  return responder({
    res,
    success: true,
    message: "successfully fetched all transaction",
    data: allTransactions,
  });
};

export { postApiTransaction, getApiTransaction };
