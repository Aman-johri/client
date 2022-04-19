import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
import Tooltip from "@mui/material/Tooltip";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteData } from "../../redux/actions/postActions";
import { connect } from 'react-redux';
import SinglePost from "../singlePost/SinglePost";
import PropTypes from "prop-types";
import EditPostInfo from "../editPostInfo/index";


class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            postOpen: false,
            open2: false
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClickOpen2 = () => {
        this.setState({ open2: true });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleClickEdit = () => {
        this.setState({ postOpen: true , open2: false});
    };
    render() {
        return (
            <>
                <div className="post">
                    <img className="postImg"
                        src={this.props.post.img} />
                    <div className="postInfo">
                        <div className='PostEdit'>
                            <i className='singlePostIcon1 fa fa-edit' onClick={this.handleClickOpen2} id='edit'></i>
                            <i className='singlePostIcon2 fa fa-trash' id='delete' onClick={this.handleClickOpen}></i>
                        </div>
                        <div className="postCats">
                            <span className="postCat">{this.props.post.categories}</span>
                        </div>
                        <Tooltip title={<h3>{this.props.post.title}</h3>} placement="right">
                            <span className="postTitle">{this.props.post.title.slice(0, 15)}{this.props.post.title.length > 15 ? " ...." : ""}</span>
                        </Tooltip>
                        <span className="postDate">{new Date(this.props.post.createdAt).toDateString()}</span>
                        <button className='singlePostIcon3' onClick={this.handleClickEdit}>View Blog</button>
                    </div>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description" >
                        <DialogTitle id="alert-dialog-title">
                            {"Are you sure you want to delete this post?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                This action cannot be undone.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose}>Cancel</Button>
                            <Button onClick={deleteData(this.props.post._id)}>
                                Continue
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <SinglePost id={this.props.post._id} open={this.state.postOpen} img={this.props.post.img} post={this.props.post} />
                <EditPostInfo id={this.props.post._id} open={this.state.open2} img={this.props.post.img} post={this.props.post} />
            </>
        );
    }
}

// const mapDispatchToProps = dispatch => ({
//     deleteData: (id) => dispatch(deleteData(id))
// })

Post.propTypes = {
    deleteData: PropTypes.func.isRequired
}

Post.defaultProps = {
    deleteData: () => { },
}

// export default connect(null,mapDispatchToProps)(Post);
export default Post;