import Transaction from "../models/Transaction.js";

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

    return res.json({
      success: true,
      message: "Transaction saved successfully",
      data: savedTransaction,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
    });
  }
};

const getApiTransaction = async (req, res) => {
  const allTransactions = await Transaction.find();

  return res.json({
    success: true,
    message: "successfully fetched all transaction",
    data: allTransactions,
  });
};

export { postApiTransaction, getApiTransaction};
