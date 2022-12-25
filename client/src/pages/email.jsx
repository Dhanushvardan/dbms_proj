import React from "react";
import emailjs from "@emailjs/browser";
export default function Email() {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("sendEmailFunction");
    emailjs
      .sendForm("gmail", "template_8d10acb", e.target, "8QVnixTp72OZrOr8G")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="emailForm">
      <form onSubmit={sendEmail}>
        <input
          type="type"
          className="formInputs"
          name="name"
          placeholder="User_name"
        ></input>
        <input
          type="email"
          className="formInputs"
          name="email"
          placeholder="User_email"
        ></input>
        <input
          type="type"
          className="formInputs"
          name="subject"
          placeholder="Subject"
        ></input>
        <input
          type="type"
          className="formInputs"
          name="message"
          placeholder="Message"
        ></input>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}
