
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
    this.setState({
      openDiolog: true
    });
  }

  render(){
    console.log(this.state.openDiolog);
    return (
      <>
      <Header/>
      <div className="home">
        <Posts />
        <Tooltip title="Create new Post" placement="bottom">
        <button className="createPost fa fa-plus" onClick={this.openDiologBox}></button></Tooltip>
        <Sidebar/>
      </div>
      <Create openDiolog={this.state.openDiolog} />
      </>
    );
  }
}
