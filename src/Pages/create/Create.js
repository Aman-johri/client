import "./create.css";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

toast.configure();

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      categories: "",
      open: false,
      img: "",
      setImag: "",
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClickClose = (e) => {
    console.log("hi");
    e.preventDefault();
    if (this.state.title == "" && this.state.desc == "" && this.state.categories == "" && this.state.img == "") {
      this.setState({
        close: false
      })
      this.props.onClose();
    }
    else {
      this.setState({
        open: true
      })
    }
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleCloseOnly = () => {
    this.setState({
      open: false
    });
    this.props.onClose();
    this.setState({
      title: "",
      desc: "",
      categories: "",
      img: "",
    })
  };


  handleClick = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      desc: this.state.desc,
      categories: this.state.categories,
      img: this.state.img,
      userID : localStorage.getItem("userId")
    };
    console.log(post);
    this.props.createData(post);
    setTimeout(() => {
      window.location.href = "/";
    }, 200);
  }

  handleEmpty = (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let img = document.getElementById("img").value;
    let categories = document.getElementById("category").value;

    if (title!="" && desc!="" && img!="" && categories!="" && title.length >= 10 && desc.length >= 10){
      document.getElementById("btn1").removeAttribute("disabled");
    }
  }

  componentDidMount() {
    if(localStorage.getItem("token") === null){
      window.location.href = "/login";
    }
    else{
    this.setState({
      close:this.props.openDiolog
    })
  }
}
  render() {  

    const { title, desc, categories, img } = this.state;
    const enable = title.length > 0 && desc.length > 0 && img.length > 0 && categories.length > 0
    console.log(enable);
    return (
      <>
        <Dialog open={this.props.openDiolog} id="diolog" Close={this.handleClose} fullWidth maxWidth="lg" fullHeight>
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="close"
              >
              <CloseIcon onClick={this.handleClickClose} id="btn" />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Create Post
              </Typography>
              {enable === false ? (<Tooltip title="Fill all the Fields"><span><button className="writeSubmit21" onClick={this.handleClick} disabled={true} >
                Publish
              </button></span></Tooltip> ) : (
              <button className="writeSubmit2" onClick={this.handleClick} >
                Publish
              </button>)}
            </Toolbar>
          </AppBar>
          <div className="write">
            <form className="writeForm">
              <div className="writeFormGroup">
                <input
                  className="writeInput21"
                  placeholder="Enter the URL of your image"
                  type="text"
                  id="img"
                  name="img"
                  minlength="10"
                  onChange={this.handleTextChange}
                  required
                />
                <img src={this.state.img} className="img-Preview" id="preview"/>
              </div>
          <div className="Error">
            <p style={{ marginTop : -60 , marginLeft: 80 }}>{this.state.img == "" ? "*Required" : ""}</p>
          </div>
          <div className="writeFormGroup">
                <input
                  className="writeInput1"
                  placeholder="Title..."
                  type="text"
                  id="title"
                  name="title"
                  minlength="10"
                  onKeyUp={this.handleEmpty}
                  onChange={this.handleTextChange}
                  required
                />
                <select className="category" id="category" name="categories" onChange={this.handleTextChange} onKeyUp={this.handleEmpty} required>
                  <option value="">Select Category</option>
                  <option value="Technology">Technology</option>
                  <option value="Business">Business</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Sports">Sports</option>
                  <option value="Science">Science</option>
                  <option value="Health">Health</option>
                </select><br />
              </div>
              <div className="Error">
                <p style={{ marginLeft: 80 }}>{this.state.title.length > 10 ? "" : "*Title must be atleast 10 characters long"}</p><p style={{ marginRight: 300 }}>{this.state.categories == "" ? "*Required" : ""}</p>
              </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput2 writeText"
              placeholder="Tell your story..."
              type="text"
              id="desc"
              name="desc"
              onChange={this.handleTextChange}
              required
            />
          </div>
          <div className="Error1">
            <p style={{ marginLeft: 80 }}>{this.state.desc.length < 10 ? "*Desc must be atleast 10 character long" : ""}</p>
          </div>
        </form>
        </div>
        </Dialog >
      <Dialog
        open={this.state.open}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"Do you want to cancel your create Post?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            If you cancel your create post, your post will not be saved.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Disagree</Button>
          <Button onClick={this.handleCloseOnly}>Agree</Button>
        </DialogActions>
      </Dialog>
      </>
    );
  }
}
Create.propTypes = {
  createData: PropTypes.func.isRequired
}

Create.defaultProps = {
  createData: () => { }
}

export default Create;