import "./login.scss";
import { useState } from "react";
import { login } from "../../authContext/apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix ? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected bu Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
