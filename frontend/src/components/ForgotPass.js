import React, { Component } from "react";
import "../css/ForgotPass.css";
import { Link } from "react-router-dom";

export default class ForgotPass extends Component {
  render() {
    return (
      <form action="data/" className="formForgotPass">
        <h1> Reset your password </h1>
        <p>
          Enter your user account's verified <strong>email</strong> <br />
          address and we will send you a <strong>password</strong>
          <br />
          reset link. 
        </p>
        <label className="labelEmail"> Email  </label>
        <input className="inputEmail" type="email" />
        <input className="buttonSendEmail" type="submit" value="Send email" />
        <button className="buttonHome" onclick="home()" type="button">
          <Link to="/">Home</Link>
        </button>
        <footer className="footer">
          <Link to="/">Terms</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">helpt</Link>
        </footer>
      </form>
    );
  }
}
