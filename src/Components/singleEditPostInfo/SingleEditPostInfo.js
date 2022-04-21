import React from 'react'
import "./singleEditPostInfo.css";
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { width } from '@mui/system';
import { Tooltip } from '@mui/material';
toast.configure();


class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: "",
      desc: "",
      update: false,
      isHidden: true,
      open: false,
      open1: false,
      open2: false,
      img:this.props.post.img
    }
  }

  handleClick = () => {
    this.setState({
      title: this.props.post.title,
      desc: this.props.post.desc,
      img: this.props.post.img,
      update: true
    })
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleClick1 = () => {
    this.setState({
      open2: true
    })
  }

  handleClickUpdate = () => {
      const post = {
        title: this.state.title,
        desc: this.state.desc,
        img: this.state.img
      };
      axios.put('http://localhost:5000/posts/' + this.state.id, post)
        .then(res => 
          toast.success("Post updated successfully"));
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
      
  }

  handleCloseOpen = () => {
    if(this.state.title == this.props.post.title && this.state.img == this.props.post.img && this.state.desc == this.props.post.desc){
      this.props.onClose();
    }
    else{
      this.setState({
        open: true
      })
    }
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }


  handleClose2 = () => {
    this.setState({
      open1: false
    })
  }


  handleClose1 = () => {
    this.setState({
      open: false
    })
    this.props.onClose();
    this.setState({
      title: this.props.post.title,
      desc: this.props.post.desc,
      img: this.props.post.img
    })
  }
  handleUpdateOpen = () => {

    this.setState({
      open1: true
    })
  }

  handleError = () => {
    toast.info("you have not done any changes or you have not fullfilled the conditions of the given text fields" , { position: toast.POSITION.TOP_CENTER } );
  }


  componentDidMount() {
    this.handleClick();
  }
  render() {
    const { title, desc, createdAt, _id } = this.state;
    const enable = (title===this.props.post.title && desc === this.props.post.desc && this.state.img === this.props.post.img) || (this.state.title == "" || this.state.desc == "" || this.state.img == "");
    console.log(enable);
    return (
      <>
        <Dialog open={this.props.open} fullWidth maxWidth="lg" fullHeight>
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="close"
              >
              <CloseIcon onClick={this.handleCloseOpen} />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Edit Post (Fields are editable,only write in the fields you want to update)
              </Typography>
              {enable === true ? (<Tooltip title="You have not done any changes"><span><button className="writeSubmit2" onClick={this.handleClickUpdate} disabled={true} >
                Publish
              </button></span></Tooltip> ) : (
              <button className="writeSubmit2" onClick={this.handleClickUpdate} >
                Publish
              </button>)}
            </Toolbar>
          </AppBar>
          <div className='singlePost'>
            <div className='singlePostWrapper'>
              <img className="singlePostImg" src={this.state.img} />
              {this.state.update ? <><input type="text" id="img" name="img" className='singlePostTitleInput' placeholder="If you want to change the image of the blog then paste the new link here" value={this.state.img} onChange={(e) => this.setState({ [e.target.name]: e.target.value })} /><p style={{ color: "red" }} >{this.state.img.length < 5 ? "Enter the URL of the Image for your Blog" : ""}</p></> : null}
              {this.state.update ?
                <><input type="text" id="title" name="title" className="singlePostTitleInput" value={this.state.title} onChange={(e) => this.setState({ [e.target.name]: e.target.value })} /><p style={{ color: "red" }}>{this.state.title.length < 10 ? "Title must be atleast 10 character long" : ""}</p></> :
                <h1 className='singlePostTitle'>
                  {title}
                  <div className='singlePostEdit'>
                    <i className='singlePostIcon fa fa-edit' id='edit' onClick={this.handleClick} ></i>
                  </div>
                </h1>
              }
              <div className='singlePostInfo'>
                <span className='singlePostAuthor'>Author: <b>Aman</b></span>
                <span className='singlePostDate'>{new Date(this.props.post.createdAt).toDateString()}</span>
              </div>
              {
                this.state.update ? <><textarea className="singlePostDescInput" name="desc" id="desc" value={this.state.desc} onChange={(e) => this.setState({ [e.target.name]: e.target.value })}></textarea><p style={{ color: "red" }}>{this.state.desc.length < 10 ? "Description should not be empty" : ""}</p></> :
                  <p className='singlePostDesc'>
                    {desc}
                  </p>
              }
            </div>
          </div>
        </Dialog>
        <Dialog
          open={this.state.open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you don't want to edit this post?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you click yes, you will be redirected to the home page.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>No</Button>
            <Button onClick={this.handleClose1} >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.open1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to update your post?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you click yes, your previous data will be replaced by the new data.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose2}>No</Button>
            <Button onClick={this.handleClickUpdate} id="supportyes" >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}


SinglePost.propTypes = {
  Postdata: PropTypes.object.isRequired,
  deleteData: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired
}

SinglePost.defaultProps = {
  deleteData: () => { },
  updateData: () => { }
}

export default SinglePost;