import "./login.scss";
import React from "react";

export default function Login() {
  return (
    <div className="login">
      <form className="loginForm">
        <input type="text" className="loginInput" placeholder="email" />
        <input type="password" className="loginInput" placeholder="password" />
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
}
