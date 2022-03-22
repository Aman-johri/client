import { useEffect,useState } from "react";
import Header from "../../Components/header/Header";
import Sidebar from "../../Components/sidebar/Sidebar";
import Posts from "../../Components/posts/Posts";
import "./home.css"
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {fetchData} from "../../redux/actions/postActions";

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
