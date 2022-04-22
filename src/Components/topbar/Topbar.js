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

    handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("user");
        localStorage.removeItem("userName");
        window.location.href = "/login";
    };
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
                        <li className="topListItem">ABOUT</li>
                        <li className="topListItem">CONTACT</li>
                        { localStorage.getItem("token") == null ? null : <li className="topListItem"><button className="logout" onClick={this.handleLogout}>LOGOUT</button></li>  }    
                    </ul>
                </div>
                <div className="topRight">
                     <img src="https://www.w3schools.com/howto/img_avatar.png"  className="topImg" alt="avatar"/>  
                     <i className="topSearchIcon fa fa-search"></i>  
                </div>
            </div>
        );
    }
                        
    }
    export default Topbar;