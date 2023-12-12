import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllExpenses.css";
import Navbar from "../../components/Navbar/Navbar";

function AllExpenses() {
  const [transactions, setTransactions] = useState([]);

  const loadTransactions = async () => {
    const response = await axios.get("/api/transactions");
    const transactionsData = response?.data?.data;
    console.log(transactionsData);
    setTransactions(transactionsData);
  };

  useEffect(() => {
    loadTransactions();
  }, []);
  return (
    <>
      <div>
        <Navbar/>
        <h1 className="text-center">All Expenses</h1>
        <div className="container">
        {transactions?.map((trans, index) => {
          const {_id, amount, type, category, description, createdAt, updatedAt} = trans;

          return(
            <div key={index} className="transaction-card shadow-lg">
                <span className={`transaction-amount fs-3 fw-bolder`}>
                    {type==="debit" ? "-" : "+"}
                    {amount}
                </span>
            </div>
          )
        })}
        </div>
      </div>
    </>
  );
}

export default AllExpenses;
