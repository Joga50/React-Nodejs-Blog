import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Log3434in</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>dfLogin</button>
        <p>This is an erro!</p>
        <span>
          Dont you have an account ?<Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
