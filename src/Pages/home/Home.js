
import Header from "../../Components/header/Header";
import Sidebar from "../../Components/sidebar/Sidebar";
import Posts from "../../Components/postData/Posts";
import "./home.css"
import React from "react";


export default class Home extends React.Component {

  render(){
    return (
      <>
      <Header/>
      <div className="home">
        <Posts />
        <Sidebar/>
      </div>
      </>
    );
  }
}
