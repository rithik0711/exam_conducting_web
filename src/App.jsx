import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './Signup';
const Login = () => {
  return (
    <>
    <div className="container">
      <div className="main">
        <h2>Login Page</h2>
        <p className="signup">Doesn't have account <Link to="/Signup">Signup</Link></p>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div className="pass">
          <label htmlFor="password">Password
          <p><a href="#" className="forgot">Forgot password?</a></p>
            </label>
          <input type="password" />
        </div>
        <button className="login">Login</button>
        <button className="google"><img src="/images/google.png" alt="Google Image" />Continue with Google</button>
      </div>
      <img src="/images/user.png" alt="" className="system-img"/>
    </div>
    </>
  )
}
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};
export default App;