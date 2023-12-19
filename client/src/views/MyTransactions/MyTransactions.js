import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import showToast from "crunchy-toast";
import axios from "axios";
import "./MyTransactions.css";

function MyTransactions() {
  const [transaction, setTransaction] = useState([]);
  const [creditSum, setCreditSum] = useState(0);
  const [debitSum, setDebitSum] = useState(0);
  const [user, setUser] = useState();

  const CATEGORY_EMOJI_MAP = {
    food: "🍔",
    entertainement: "📺",
    shopping: "🛍",
    rent: "🏡",
    travel: "✈",
    education: "🏫",
    salary: "💰",
    freelancing: "💻",
    "side-hussle": "👔",
    other: "🤔",
  };

  const loadTransaction = async () => {
    const getUser = JSON.parse(localStorage.getItem("user") || "{}");
    const storageUser = getUser._id;
    console.log(storageUser);

    const response = await axios.get(`/api/transactions/users/${storageUser}`);
    const transactionsData = response?.data?.data;

    let totalCredit = 0;
    let totalDebit = 0;

    transactionsData?.forEach((transaction) => {
      if (transaction.type === "credit") {
        totalCredit += transaction.amount;
      } else {
        totalDebit += transaction.amount;
      }
    });
    setCreditSum(totalCredit);
    setDebitSum(totalDebit);

    setTransaction(transactionsData);
  };

  useEffect(() => {
    loadTransaction();
  }, []);

  useEffect(() => {
    const userstorageData = JSON.parse(localStorage.getItem("user") || "{}");

    if (userstorageData?.email) {
      setUser(userstorageData);
    } else {
      showToast("you are not logged in!", "danger", 1000);
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center">All Expenses</h1>
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="card shadow-md p-2 border border-2 rounded-3 border-success">
              <h4 className="credit-text">Credit: {creditSum}</h4>
            </div>
            <div className="card shadow-lg p-2 border border-2 rounded-3 border-danger">
              <h4>Debit: {debitSum}</h4>
            </div>
          </div>
        </div>

        {transaction?.map((transactions, index) => {
          const { _id, amount, type, description, category, createdAt } =
            transactions;

          const date = new Date(createdAt).toLocaleDateString();
          const time = new Date(createdAt).toLocaleTimeString();
          return (
            <div key={index} className="transaction-card">
              <span
                className={`transaction-amount ${
                  type === "debit" ? "debit-amount" : "credit-amount"
                }`}
              >
                {type === "debit" ? "-" : "+"}
                {amount}
              </span>
              <b>{type === "debit" ? "debited" : "credited"}</b>

              <span className="transaction-category">
                {CATEGORY_EMOJI_MAP[category]}
                {category}

                <button className="btn btn-success edit">update</button>
              </span>
              <hr />
              {description}
              <span className="date-text">
                {" "}
                On {date} at {time}
              </span>

              <p className="btn btn-danger delete">delete</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MyTransactions;
