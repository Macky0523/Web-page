import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
