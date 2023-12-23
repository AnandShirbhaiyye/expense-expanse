import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-page">
        <Navbar />
        <h1 className="text-center mt-5">Expense Expanse💰</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5">
              <div className="card shadow-lg p-3">
                <div className="card-body">
                  <h5 className="card-title text-center">Budget Management:</h5>
                  <p className="card-text">
                    Set monthly or custom budgets for different expense
                    categories.
                  </p>
                  <p>
                    Expanse Expanse is a budget management website, it likely
                    helps users track and manage their expenses, income, and
                    overall financial situation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="card shadow-lg p-3">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Financial Overview and Income Breakdown:
                  </h5>
                  <p className="card-text">
                    Record and categorize your sources of income, whether it's
                    your salary, side hustle, or any other form of earnings.
                  </p>
                  <p className="card-text">
                    Clearly visualize your total income and total debit income,
                    giving you a comprehensive snapshot of your financial
                    health.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="card shadow-lg p-3">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Effortless Budget Management:
                  </h5>
                  <p className="card-text">
                    Expanse Expanse is your go-to platform for managing your
                    budget with ease.Tailor your budget categories to suit your
                    unique lifestyle. Whether it's bills, groceries, or
                    entertainment,
                  </p>
                  <p className="card-text">
                    Take control of your financial journey by tracking your
                    income and expenses effortlessly. Expanse Tracker adapts to
                    your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link to="/addtransactions" className="add-link">
            <div class="d-grid gap-2 col-6 mx-auto mt-5">
              <button class="btn btn-dark" type="button">
                <b>Add Transaction</b>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
