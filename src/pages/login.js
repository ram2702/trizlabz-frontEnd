import React from "react";
import "../css/login.css";
import logo from "../img/Trizlabz_logo__1_-removebg-preview 1.png";
export default function Login() {
  return (
    <div className="log-cont">
      <div className="log-box">
        <article className="box-1">
          <span className="head-cont">
            <h1>Inventive Thinking Minds!</h1>
          </span>
          <p>
            Inventive problem solving combined with technology agility to create
            reliable, sustainable and optimal designs for our products and
            solutions.
          </p>
        </article>
        <article className="box-2">
          <img src={logo} alt="Logo" />
          <form className="login-form">
            <input type="text" placeholder="Login ID" />
            <input type="password" placeholder="Password" />
            <p>Forgot Password?</p>
            <button>LOGIN</button>
          </form>
        </article>
      </div>
    </div>
  );
}
