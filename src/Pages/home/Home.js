
import Header from "../../Components/header/Header";
import Sidebar from "../../Components/sidebar/Sidebar";
import Posts from "../../Components/postData/Posts";
import "./home.css"
import React from "react";
import Create from "../create/index";
import Tooltip from "@mui/material/Tooltip";


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openDiolog: false,
    }
    this.openDiologBox = this.openDiologBox.bind(this);
  }

  openDiologBox = () => {
    console.log("hi1111");
    this.setState({
      openDiolog: !this.state.openDiolog
    });
  }
  componentDidMount(){
    //check if the token is present then redirect to dashboard else redirect to login
    console.log("token",localStorage.getItem("token"));
    if(localStorage.getItem("token") === null){
      window.location.href = "/login";
    }
  }

  render(){
    console.log(this.state.openDiolog);
    return (
      <>
      <Header/>
      <div className="home">
        <Posts />
        <Tooltip title="Create new Blog" placement="bottom">
        <button className="createPost fa fa-plus" onClick={this.openDiologBox}></button></Tooltip>
        <Sidebar/>
      </div>
      <Create openDiolog={this.state.openDiolog} onClose={this.openDiologBox} />
      </>
    );
  }
}
