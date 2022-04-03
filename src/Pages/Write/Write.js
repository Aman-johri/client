import "./write.css";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {createData } from "../../redux/actions/PostActions";

class Write extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      categories: "",
    };
  }
  
  handleTextChange = (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;
    const categories = document.getElementById("category").value;
    this.setState({
      title:title,
      desc:desc,
      categories:categories
    });
  }

  handleClick = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      desc: this.state.desc,
      categories:this.state.categories
    };
    this.props.createData(post);
    window.location.href = "/Home";
    window.alert("Congratulation! your post has been published...");
  }
  
   handleEmpty = e => {
     e.preventDefault();
     const title = document.getElementById("title").value;
     const desc = document.getElementById("desc").value;
     const category = document.getElementById("category").value;
     if (title && (desc && category)) {
       document.getElementById("btn").disabled = false;
      } 
     else {
       document.getElementById("btn").disabled = true;
      }
    }
  render(){
    return (
      <div className="write">
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <form className="writeForm" onSubmit={this.handleClick}>
          <div className="writeFormGroup">
            {/* <label htmlFor="fileInput">
              <i className="writeIcon fa fa-plus"></i>
            </label> */}
            {/* <input id="fileInput" type="file" style={{ display: "none" }} /> */}
            <input
              className="writeInput1"
              placeholder="Title..."
              type="text"
              id="title"
              onKeyUp={this.handleEmpty}
              onChange={this.handleTextChange}
            />
            <input
             className="category"
             placeholder="Category..."
             type="text"
             id="category"
             onKeyup={this.handleEmpty}
             onChange={this.handleTextChange}
             />


          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput2 writeText"
              placeholder="Tell your story..."
              type="text"
              id="desc"
              onKeyUp={this.handleEmpty}
              onChange={this.handleTextChange}
            />
          </div>
          <button className="writeSubmit" type="submit" disabled id="btn">
            Publish
          </button>
        </form>
      </div>
    );
  }

  }

const mapDispatchToprops = dispatch => {
  return {
    createData: (data) => dispatch(createData(data))
  };
}



export default connect(null , mapDispatchToprops)(Write);
  