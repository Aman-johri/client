import "./login.css";
import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false,
    };
  }

  //handleClick function for login the user
  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
    const post = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(post);
  } 

  render() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" name="email" type="text" placeholder="Enter your email..." onChange={(e) => this.setState({[e.target.name] : e.target.value})}/>
        <label>Password</label>
        <input className="loginInput" type="password" name="password" placeholder="Enter your password..." onChange={(e) => this.setState({[e.target.name] : e.target.value})} />
        <button className="loginButton">Login</button>
      </form>
      <Link to="/register">
        <button className="loginRegisterButton" onClick={this.handleClick}>Register</button>
      </Link>
    </div>
  );
}
}

export default Login;