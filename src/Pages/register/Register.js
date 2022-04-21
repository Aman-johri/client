import "./register.css"
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/postActions";
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            error: false,
        };
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        // axios.post("http://localhost:5000/auth/register", this.state)
        //     .then(response => {
        //         console.log(response);
        //         window.location.href = "/login";
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         this.setState({
        //             error: true,
        //         });
        //     });
        this.props.registerUser(this.state);
        
    }

    render(){
    return (
        <div className="register" onSubmit={this.handleSubmit}>
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter your username..." onChange={(e) => this.setState({ ...this.state,  username: e.target.value })} />
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Enter your email..." onChange={(e) => this.setState({ ...this.state, email: e.target.value })} />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." onChange={(e) => this.setState({ ...this.state, password: e.target.value })} />
                <input className="registerButton" type="submit" value="Register"/>
            </form>
            <Link to="/login">
                <button className="registerLoginButton">Login</button>
            </Link>
            {this.state.error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
        </div>
    )
}
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        registerError: state.registerError,
        isloading: state.isloading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (user) => {
            dispatch(registerUser(user));
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Register);