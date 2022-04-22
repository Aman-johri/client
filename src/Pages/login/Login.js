import "./login.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      email:this.state.email,
      password:this.state.password
    }
    axios.post("http://localhost:5000/auth/login",post)
      .then((response) => {
        console.log("abcd",response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("userId", response.data.user._id);
        localStorage.setItem("userName", response.data.user.username);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
        });
      });
  } 

  render() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={this.handleClick}>
        <label>Email</label>
        <input className="loginInput" name="email" type="text" placeholder="Enter your email..." onChange={(e) => this.setState({[e.target.name] : e.target.value})}/>
        <label>Password</label>
        <input className="loginInput" type="password" name="password" placeholder="Enter your password..." onChange={(e) => this.setState({[e.target.name] : e.target.value})} />
        <button className="loginButton">Login</button>
      </form>
      <Link to="/register">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
}
}

export default Login;