import React from 'react'
import "./singlePost.css";
import axios from 'axios'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import {deleteData} from '../../redux/actions/postActions'
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
      open2:false,
      img: "",
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
    toast.info("You have choose to edit your blog then change the title,description and Image Url in their respective fields", { position: toast.POSITION.TOP_CENTER });

  }

  handleClick1 = () => {
    this.setState({
      open2: true
    })
  }

  handleClickUpdate = () => {
    const post = {
      title: this.state.title,
      desc: this.state.desc
    };
    console.log(post);
    axios.put('http://localhost:5000/posts/' + this.state.id, post)
      .then(res => console.log(res.data));
    window.location.href = "/";
  }

  handleCloseOpen = () => {
    this.setState({
      open: true
    })
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
    window.location.href = "/";
  }

  handleClose3 = () => {
    this.setState({
      open2: false
    })
  }

  handleUpdateOpen = () => {
    this.setState({
      open1: true
    })
  }

  // componentDidMount(){
  //   const postId = window.location.href.split("/")[4];
  //   this.props.getData(postId);
  // }

  render() {
    const {title, desc, createdAt, _id} = this.props.post;
    return (
      <>
        <Dialog open={this.props.open} fullScreen>
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
                View Post Details or Update Post
              </Typography>
              <button className='singlePostBtn' hidden={this.state.isHidden} onClick={(this.state.title.length > 10 && this.state.desc !== "" && this.state.img !== "")?this.handleUpdateOpen:null} id="updatebtn" >
                Update
              </button>
            </Toolbar>
          </AppBar>
          <div className='singlePost'>
            <div className='singlePostWrapper'>
              <img className="singlePostImg" src={this.props.post.img} alt="post" />
              {this.state.update ? <><h3>Image Url:</h3><input type="text" id="img" name="img" className='singlePostTitleInput' placeholder="If you want to change the image of the blog then paste the new link here (Optional)"value={this.state.img} onChange={(e) => this.setState({...this.state, [e.target.name]: e.target.value })} /><p style={{color:"red"}}>{this.state.img.length < 5 ? "Enter the Url of the image for your blog" : ""}</p></> : null}
              {this.state.update ?<>
                <h3 style={{marginTop:20}}>Title:</h3><input type="text" id="title" name="title" className="singlePostTitleInput" value={this.state.title} onChange={(e) => this.setState({ [e.target.name]: e.target.value })} /><p style={{color:"red"}}>{this.state.title.length < 10 ? "Title must be of atleast 10 character long" : ""}</p></> :
                <h1 className='singlePostTitle'>
                  {title}
                  <div className='singlePostEdit'>
                    <i className='singlePostIcon fa fa-edit' id='edit' onClick={this.handleClick} ></i>
                    <i className='singlePostIcon fa fa-trash' id='delete' onClick={this.handleClick1}></i>
                  </div>
                </h1>
              }
              <div className='singlePostInfo'>
                <span className='singlePostAuthor'>Author: <b>Aman</b></span>
                <span className='singlePostDate'>{new Date(createdAt).toDateString()}</span>
              </div>
              {
                this.state.update ? <><h3 style={{marginTop:20}}>Description:</h3><textarea className="singlePostDescInput" name="desc" id="desc" value={this.state.desc} onChange={(e) => this.setState({ [e.target.name]: e.target.value })}></textarea><p style={{color:"red"}}>{this.state.desc === "" ? "Description should not be empty" : ""}</p></> :
                  <p className='singlePostDesc'>
                    {desc}
                  </p>
              }
            </div>
            {/* } */}
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
        <Dialog
          open={this.state.open2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete this post?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you click yes, your post will be deleted permanently.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose3}>No</Button>
            <Button onClick={deleteData(_id)} >
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
  getData: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired
}

SinglePost.defaultProps = {
  deleteData: () => { },
  getData: () => { },
  updateData: () => { }
}

export default SinglePost;