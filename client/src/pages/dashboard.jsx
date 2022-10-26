import React, { useState } from "react";
import axios from "axios";
import "./dashboard.scss";

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
      await axios.post("http://localhost:3001/input", {
        currency,
        date,
        val1,
        val2,
        val3,
        val4,
        val5,
      });
    } catch (err) {
      console.log(err);
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
        setVal1(value.data.market_data.current_price.inr);
        setVal2(value.data.market_data.current_price.usd);
        setVal3(value.data.market_data.current_price.eur);
        setVal4(value.data.market_data.current_price.gbp);
        setVal5(value.data.market_data.current_price.jpy);
        console.log(">>>>>", currency, val1);
        if (currency && val1 && val2 && val3 && val4 && val5 && date) {
          sendValue();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="dashboard">
      <div className="inputSection">
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
