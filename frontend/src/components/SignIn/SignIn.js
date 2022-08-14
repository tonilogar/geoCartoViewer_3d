import React, { Component } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

class SignIn extends Component {
  handleChange = (e) => {
    console.log({value: e.target.value})
  }
  handleClick = (e) => {
    console.log("click boton")
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted")
  }
  render() {
    return (
      <form className="formSignIn" onSubmit={this.handleSubmit}>
          <h1> Login </h1>
          <label className="labelUserName"> User name  </label>
          <input onChange={this.handleChange} className="inputUserName" type="text" />
          <label className="labelPassword"> Password </label>
          <input onChange={this.handleChange} className="inputPassword" type="password" placeholder="********"/>
          <input onClick={this.handleSubmit}  className="buttonLogin" type="submit" value="Login" />
          <label className="labelFPassword"><Link to="/forgotpass">Forgot password?</Link></label>
          <button onClick={this.handleClick} className="buttonHome" type="button"><Link to="/">Home</Link></button>
          <footer className="footer">
            <Link to="/">Terms</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">helpt</Link>
          </footer> 
      </form>
    );
  }
}

export { SignIn } 
