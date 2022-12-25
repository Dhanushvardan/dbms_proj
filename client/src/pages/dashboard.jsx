import React, { useState } from "react";
import axios from "axios";
import "./dashboard.scss";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Dashboard() {
  const [currency, setCurrency] = useState(null);
  const [date, setDate] = useState(null);
  const [val1, setVal1] = useState(null);
  const [val2, setVal2] = useState(null);
  const [val3, setVal3] = useState(null);
  const [val4, setVal4] = useState(null);
  const [val5, setVal5] = useState(null);
  const sendValue = async () => {
    try {
      console.log(currency, val1);
      const d = {
        currency,
        date,
        val1,
        val2,
        val3,
        val4,
        val5,
      };
      await axios.post("http://localhost:3001/input", d);
    } catch (err) {
      console.log(err);
    }
  };
  const sendEmail = async () => {
    console.log("sendEmailFunction");
    emailjs
      .send(
        "gmail",
        "template_8d10acb",
        {
          currency: currency,
          date: date,
          val1: val1,
          val2: val2,
          val3: val3,
          val4: val4,
          val5: val5,
        },
        "8QVnixTp72OZrOr8G"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const sendValueData = async () => {
    if (currency && val2 && val3 && val4 && val5 && date) {
      sendValue();
    }
  };

  const getHistoricalPrice = async () => {
    if (currency && date) {
      let string =
        "https://api.coingecko.com/api/v3/coins/" +
        currency +
        "/history?date=" +
        date +
        "&localization=false";
      try {
        const value = await axios.get(string);
        console.log(value);
        setVal1(value.data.market_data.current_price.inr);
        setVal2(value.data.market_data.current_price.usd);
        setVal3(value.data.market_data.current_price.eur);
        setVal4(value.data.market_data.current_price.gbp);
        setVal5(value.data.market_data.current_price.jpy);
        console.log(">>>>>", currency, val2);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="dashboard">
      <div className="inputSection">
        <div className="navBar">
          <div className="logo">
            <img
              className="logoImg"
              src="data:image/png;base64,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"
            />
          </div>
          <button className="navButton">convert</button>

          <Link className="Link" to="/Visualize">
            <button className="navButton">visualize</button>
          </Link>
        </div>
        <input
          type="text"
          name="currencyname"
          className="dashboardInputs"
          placeholder="Enter crypto name"
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
        />
        <input
          type="text"
          name="date"
          className="dashboardInputs"
          placeholder="Enter Date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <button className="apiButton" onClick={getHistoricalPrice}>
          SUBMIT
        </button>
        <button className="apiButton" onClick={sendEmail}>
          EMAIL IT
        </button>
        <button className="apiButton" onClick={sendValueData}>
          SEND DATA
        </button>
      </div>

      <div className="outputs">
        <div className="ops">{"INR"}</div>
        <div className="ops">{"USD"}</div>
        <div className="ops">{"EUR"}</div>
        <div className="ops">{"GBP"}</div>
        <div className="ops">{"JPY"}</div>
      </div>
      <div className="outputs1">
        <div className="ops1">{val1}</div>
        <div className="ops1">{val2}</div>
        <div className="ops1">{val3}</div>
        <div className="ops1">{val4}</div>
        <div className="ops1">{val5}</div>
      </div>
    </div>
  );
}
