import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["credit", "debit"],
      required: true,
    },
    category: {
      type: String,
      enum: [
        "food",
        "entertainment",
        "rent",
        "shopping",
        "travel",
        "education",
        "other",
      ],
      default: "other",
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Trasaction = model("Transaction", transactionSchema);

export default Trasaction;