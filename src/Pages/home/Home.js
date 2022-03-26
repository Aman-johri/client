import { useEffect,useState } from "react";
import Header from "../../Components/header/Header";
import Sidebar from "../../Components/sidebar/Sidebar";
import Posts from "../../Components/posts/Posts";
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
