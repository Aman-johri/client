import "./create.css";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      categories: "",
      isButtonDisabled : true
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  
  handleTextChange(e){
    this.setState({ [e.target.name] : e.target.value});
    // if((this.state.title && this.state.desc && this.state.categories)){
    //   this.setState({
    //     isButtonDisabled:false
    //   })
    // }
    // else{
    //   this.setState({
    //     isButtonDisabled:true
    //   })
    // }
  }

  handleClick = () => {
    const post = {
      title: this.state.title,
      desc: this.state.desc,
      categories:this.state.categories
    };
    this.props.createData(post);
    window.location.href = "/Home";
    window.alert("Congratulation! your post has been published...");
  }
  render(){

    const {title,desc,categories,isButtonDisabled} = this.state;
    return (
      <div className="write">
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <form className="writeForm">
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
              name="title"
              // onKeyUp={this.handleEmpty}
              onChange={this.handleTextChange}
            />
            <input
             className="category"
             placeholder="Category..."
             type="text"
             id="category"
             name="categories"
            //  onKeyup={this.handleEmpty}
             onChange={this.handleTextChange}
             />


          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput2 writeText"
              placeholder="Tell your story..."
              type="text"
              id="desc"
              name="desc"
              // onKeyUp={this.handleEmpty}
              onChange={this.handleTextChange}
            />
          </div>
          <h4 style={{marginLeft:150}}>*To enable Publish button provide all the fields value correctly</h4>
          <button className="writeSubmit"  onClick={(title && desc && categories)?this.handleClick:null} disabled={(title && desc && categories)?false:true} id="btn">
            Publish
          </button>
        </form>
      </div>
    );
  }

  }

Create.propTypes = {
  createData: PropTypes.func.isRequired
}

Create.defaultProps = {
  createData: () => {}
}

export default Create;