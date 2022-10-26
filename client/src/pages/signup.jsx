import axios from "axios";
import { React, useState } from "react";
import "./signup.scss";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const storeData = async () => {
    console.log(email);
    console.log(username);
    console.log(password);
    try {
      await axios.post("http://localhost:3001/signup", {
        email,
        username,
        password,
      });
      console.log("->", email);
      console.log("->", username);
      console.log("->", password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={storeData} className="formbox">
        <img
          src="https://www.pngitem.com/pimgs/m/287-2874255_seller-registration-icon-class-register-icon-png-transparent.png"
          className="signupImg"
        ></img>

        <input
          type="email"
          name="email"
          className="input_username"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="username"
          placeholder="enter your Username"
          className="input_username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          className="input_username"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="buttonSignup">
          SIGNUP
        </button>
      </form>
    </div>
  );
}
