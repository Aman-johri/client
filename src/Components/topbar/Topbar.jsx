import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
class Topbar extends React.Component {
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
                        <li className="topListItem"><Link className="linkTo" to="/Home">HOME</Link></li>
                        <li className="topListItem"><Link className="linkTo" to="/">ABOUT</Link></li>
                        <li className="topListItem"><Link className="linkTo" to="/">CONTACT</Link></li>
                        <li className="topListItem"><Link className="linkTo" to="/Write">WRITE</Link></li>
                        <li className="topListItem"><Link className="linkTo" to="/">LOGOUT</Link></li>            
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