import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">Sign in to your account</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username or email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Sign In
        </button>
        <a href="#" className="forgot-password">
          Forgot password?
        </a>
      </form>
    </div>
  );
}

export default Login;
