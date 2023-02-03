import React from "react";

function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholer="username" />
        <input type="password" placeholder="password" />
        <button>dfLogin</button>
      </form>
    </div>
  );
}

export default Login;
