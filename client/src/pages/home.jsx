import React from "react";
import "./home.scss";
import Loginpage from "../pages/login.jsx";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="title">CRYPTECH</div>
        <div className="buttonSection">
          <div>
            <Link to="/login" className="link">
              <button className="login_button">LOGIN</button>
            </Link>
          </div>
          <div>
            <Link to="/signup" className="link">
              <button type="submit" className="signup_button">
                SIGNUP
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="body">
        {/* <p>Please login/sign up to continue</p> */}
      </div>
    </div>
  );
}
