import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <div className="login-container shadow-lg p-4 mb-5  rounded">
        <h3 className="text-center mb-3">Login</h3>
        <div className="container">
          <input
            type="email"
            className="form-control mb-4"
            placeholder="enter your email"
          />
          <input
            type="password"
            className="form-control mb-4"
            placeholder="enter your Password"
          />
          <button type="button" className="btn btn-dark w-100 mb-3">
            Login
          </button>
          <p className="text-center">
            Not a member?
            <Link to="/signup" className="login-link">
              <b>Sign up now</b>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
