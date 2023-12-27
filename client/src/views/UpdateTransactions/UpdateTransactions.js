import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./UpdateTransactions.css";
import UpTransImg from "./update-transaction.png";

function UpdateTransactions() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const updateTrans = async () => {};
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="add-trasaction shadow-lg p-4 mt-3 bg-body rounded">
          <div className="row">
            <h2 className="text-center mt-3">Update Transactions⬇️</h2>
            <div className="col-md-6 mt-3 ">
              <img
                src={UpTransImg}
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
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-control"
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    >
                      <option>select category</option>
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
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </div>
                  <div className="d-flex justify-content-around">
                    <div>
                      <input
                        type="radio"
                        id="credit"
                        name="amounttype"
                        className="amounttype"
                        value="credit"
                        checked={type === "credit"}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setType(e.target.value);
                          }
                        }}
                      />
                      <label className="type-text">Credit</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="debit"
                        name="amounttype"
                        className="amounttype"
                        value="debit"
                        checked={type === "debit"}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setType(e.target.value);
                          }
                        }}
                      />
                      <label className="type-text">Debit</label>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-dark w-100 mt-3"
                    onClick={updateTrans}
                  >
                    <b>Update Transaction</b>
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

export default UpdateTransactions;
