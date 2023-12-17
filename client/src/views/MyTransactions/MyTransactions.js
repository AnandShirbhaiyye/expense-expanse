import React, {useState, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import "./MyTransactions.css"

function MyTransactions() {
    const [transaction, setTransaction] = useState([])
    const [creditSum, setCreditSum] = useState(0);
    const [debitSum, setDebitSum] = useState(0);

    const CATEGORY_EMOJI_MAP = {
        "food": "🍔",
        "entertainement": "📺",
        "shopping": "🛍",
        "rent": "🏡",
        "travel": "✈",
        "education": "🏫",
        "salary": "💰",
        "freelancing": "💻",
        "side-hussle": "👔",
        "other": "🤔"
      }
   
      const loadTransaction = async () => {
        const getUser = JSON.parse(localStorage.getItem('user') || '{}');
        const storageUser = getUser._id;
        console.log(storageUser)
    
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
        })
        setCreditSum(totalCredit);
        setDebitSum(totalDebit);
    
        setTransaction(transactionsData);
    
      }
    
      useEffect(() => {
        loadTransaction();
      }, [])

  return (
   <>
   <Navbar/>
   <div className='container'>
        <h1 className='text-center'>All Expenses</h1>
        <h4 className='credit-text'>Credit: {creditSum}</h4>
        <h4 >Debit: {debitSum}</h4>
        {
          transaction?.map((transactions, index) => {
            const { _id, amount, type, description, category, createdAt } = transactions;

            const date = new Date(createdAt).toLocaleDateString();
            const time = new Date(createdAt).toLocaleTimeString();
            return (
              <div key={index} className='transaction-card'>
                <span className={`transaction-amount ${type === 'debit' ? "debit-amount" : "credit-amount"}`}>
                  {type === 'debit' ? "-" : "+"}
                  {amount}</span>
               <b>{type === 'debit' ? 'debited' : 'credited'}</b> 

                <span className='transaction-category'>
                  {CATEGORY_EMOJI_MAP[category]}
                  {category} 

                 
                 <button className='btn btn-success edit'>update</button>

                </span>
                <hr />
                {description}
                <span className='date-text'> On {date} at {time}</span>

                <p className='btn btn-danger delete'>delete</p>
              </div>
            )
          })
        }
      </div>
   </>
  )
}

export default MyTransactions