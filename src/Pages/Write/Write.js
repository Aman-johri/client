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
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  
  handleTextChange = e => {
    const title = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;
    this.setState({
      title:title,
      desc:desc
    });
  }

  handleClick = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      desc: this.state.desc,
    };
    this.props.createData(post);
    window.location.href = "/Home";
    window.alert("Congratulation! your post has been published...");
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
            <label htmlFor="fileInput">
              <i className="writeIcon fa fa-plus"></i>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              id="title"
              onChange={this.handleTextChange}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              id="desc"
              onChange={this.handleTextChange}
            />
          </div>
          <button className="writeSubmit" type="submit" >
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
  