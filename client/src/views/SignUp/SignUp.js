import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function SignUp() {
  return (
    <>
      <Navbar />
      <form>
        <div className="signup-container shadow-lg p-4 mb-5  rounded">
          <h3 className="text-center">SignUp</h3>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-3">
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="enter your name"
                />
                <input
                  type="password"
                  className="form-control mb-4"
                  placeholder="enter your Password"
                />
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="enter your address"
                />
              </div>

              <div className="col-md-6 mt-3">
                <input
                  type="email"
                  className="form-control mb-4"
                  placeholder="enter your email"
                />
                <input
                  type="numbet"
                  className="form-control mb-4"
                  placeholder="enter your mobile"
                />
                <div className="d-flex justify-content-around">
                  <div>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      className="gender mb-4"
                    />
                    <label htmlFor="male">Male</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      className="gender mb-4"
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-dark w-100 mb-3">
                SignUp
              </button>
              <p className="text-center">
                Already have an Account,
                <Link to="/login" className="signup-link">
                  <b>login</b>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
