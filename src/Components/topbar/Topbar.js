import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: true
        };
    }
    render(){
        return (
            <div className="top">
                <div className="topLeft">
                    <i className="topIcon fa fa-facebook-square"></i>
                    <i className="topIcon fa fa-twitter-square"></i>
                    <i className="topIcon fa fa-pinterest-square"></i>
                </div>
                <div className="topCenter">
                    <ul className="toplist">
                        <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                        <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                        <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                        <li className="topListItem">{this.state.user && "LOGOUT"}</li>      
                    </ul>
                </div>
                <div className="topRight">
                    {
                        this.state.user ? (
                            <img src="https://www.w3schools.com/howto/img_avatar.png"  className="topImg" alt="avatar"/>  
                        ) :(
                            <ul className="toplist">
                            <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                            <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                        </ul>
                        )
                    }
                    <i className="topSearchIcon fa fa-search"></i>  
                </div>
            </div>
        );
    }
                        
    }
    export default Topbar;