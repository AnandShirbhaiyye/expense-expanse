import Transaction from "../models/Transaction.js";
import { responder } from "../util.js";

const postApiTransaction = async (req, res) => {
  const { amount, type, category, description, user } = req.body;

  const transaction = new Transaction({
    user,
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

const getApiTransactionById = async (req, res) => {
  try {
    const { id } = req.params;
    const showTransaction = await Transaction.findOne({ _id: id });

    return responder({
      res,
      success: true,
      data: showTransaction,
      message: "transactions show successfully",
    });
  } catch (err) {
    return responder({
      res,
      success: false,
      message: "transactions are not fetch",
    });
  }
};

const getApiTransactionByUserId = async (req, res) => {
  try {
    const { id } = req.params;

    const finduserTrans = await Transaction.find({ user: id }).populate("user");

    finduserTrans.forEach((singleTransaction) => {
      singleTransaction.user.password = undefined;
    });
    res.json({
      success: true,
      data: finduserTrans,
      message: "user fetch transaction successfully...",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const deleteUserTransactionId = async (req, res) => {
  const { id } = req.params;
  const deleteTransactionId = await Transaction.deleteOne({ _id: id });

  res.json({
    success: true,
    data: deleteTransactionId,
    message: "delete transaction successfully",
  });
};

const updateUserTransaction = async (req, res) => {
  const { id } = req.params;
  const { amount, type, description, category } = req.body;

  await Transaction.updateOne(
    { _id: id },
    {
      $set: {
        amount: amount,
        type: type,
        description: description,
        category: category,
      },
    }
  );

  const updateTransaction = await Transaction.findOne({ _id: id });

  return responder({
    res,
    success: true,
    message: "transaction update successfully",
    data: updateTransaction,
  });
};

export {
  postApiTransaction,
  getApiTransaction,
  getApiTransactionById,
  getApiTransactionByUserId,
  deleteUserTransactionId,
  updateUserTransaction,
};
