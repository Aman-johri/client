import "./write.css";
import React from "react";
import axios from "axios";

export default class Write extends React.Component {

  //....................add new post by class based component and use axios to post to server................
  handleClick = async e => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;
    const res = await axios.post("http://localhost:5000/posts", {
      title: title,
      desc: desc
    });
    console.log(res);
    window.location.href = "/Home";
    window.alert("Congratulation! your post has been published...");
  };

  
  
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
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              id="desc"
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
  