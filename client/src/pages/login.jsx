import { React, useState } from "react";
import "./login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const input = {
      email,
      password,
    };
    try {
      const res = await axios.post("http://localhost:3001/login", input);

      if (res.status === 200) navigate("/dashboard");
      console.log(res.status);
      console.log(res.response.status);
      if (res.response.status === 403) console.log("Wrong email or password.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <form className="formbox">
        <img
          src="https://png.pngtree.com/png-vector/20190919/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg"
          className="loginImg"
        ></img>
        <input
          type="email"
          name="email"
          className="input_username"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          className="input_username"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="buttonLogin" onClick={login}>
          LOGIN
        </button>
      </form>
    </div>
  );
}
