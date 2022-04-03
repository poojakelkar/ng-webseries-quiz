import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Signup = () => {
  return (
    <div className="loginUser">
      <div className="topSide">
        <div className="logoImg">
          <img
            classname="logo"
            src="https://cdn-icons-png.flaticon.com/512/2784/2784530.png"
            alt="logo"
          ></img>
        </div>
      </div>
      <div className="sign-up-container">
        <form className="sign-up-form">
          <h1 className="sign-up-title">Sign In</h1>
          <input
            className="input-sign-up"
            type="text"
            placeholder="First Name"
          ></input>
          <input
            className="input-sign-up"
            type="email"
            placeholder="Email"
          ></input>
          <input
            className="input-sign-up"
            type="password"
            placeholder="Password"
          ></input>
          <Link className="link" to="/">
            <button className="sign-up-button">Sign In</button>
          </Link>
          <span>
            Already have an account?{" "}
            <Link className="link" to="/login">
              <b>Login</b>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
