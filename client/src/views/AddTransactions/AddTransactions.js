import React from "react";
import "./AddTransactions.css";
import Navbar from "../../components/Navbar/Navbar";

function AddTransactions() {
  async function addTransaction() {}
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="add-trasaction shadow-lg p-4 mt-5 bg-body rounded">
          <div className="row">
            {/* <h4 className="text-center add-trasaction">
              <u>“Make a customer, not a sale.🤩”</u>
            </h4> */}
            <h2 className="text-center mt-3">Add Transactions⬇️</h2>

            <div className="col-md-6 mt-3 ">
              <img
                src={""}
                alt="add-trasaction-img"
                className="add-trasaction-img mx-auto d-block"
              />
            </div>

            <div className="col-md-6">
              <div className="mt-5 ">
                <form>
                  <div className="mb-3">
                    <input
                      type="number"
                      placeholder="enter Amount"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <select className="form-control">
                      <option>select category here</option>
                      <option value="food">Food</option>
                      <option value="entertainement">Entertainment</option>
                      <option value="shopping">Shopping</option>
                      <option value="rent">Rent</option>
                      <option value="travel">Travel</option>
                      <option value="education">Education</option>
                      <option value="salary">Salary</option>
                      <option value="freelancing">Freelancing</option>
                      <option value="side-hussle">Side-hussle</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="enter description"
                      className="form-control"
                    />
                  </div>

                  <div className="d-flex justify-content-around">
                  <div>
                    <input
                      type="radio"
                      id="credit"
                      name="amounttype"
                      className="amounttype"
                    />
                    <label className="type-text">Credit</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="debit"
                      name="amounttype"
                      className="amounttype"
                    />
                    <label className="type-text">Debit</label>
                  </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-dark w-100 mt-3"
                    onClick={addTransaction}
                  >
                    <b>Add Transaction</b>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTransactions;
