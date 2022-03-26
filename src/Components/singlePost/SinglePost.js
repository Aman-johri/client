import React from 'react'
import "./singlePost.css";
import axios from 'axios'
import { connect } from 'react-redux';
import {deleteData, getData , updateData} from '../../redux/actions/PostActions'

class SinglePost extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     post:this.props.Postdata,
     update:false
  }
  this.handleClick = this.handleClick.bind(this);
  this.handleClickUpdate = this.handleClickUpdate.bind(this);
}

  handleClick = e => {
    e.preventDefault();
    this.setState({
      update:true
    });
  }

  handleClickUpdate = e => {
    e.preventDefault();
    const postId = window.location.href.split("/")[4];
    const post = {
      title: this.state.title,
      desc: this.state.desc,
    };
    console.log(post);
    this.props.updateData(postId,post);
    window.alert("Congratulation! your post has been updated...");
    window.location.reload();
  }


  componentDidMount(){
    const postId = window.location.href.split("/")[4];
    this.props.getData(postId);
  }
  
   render(){
    return (
      <div className='singlePost'>
        {
            this.props.Postdata.map(post => (
              <div className='singlePostWrapper'>
              <img
              className="singlePostImg"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            { this.state.update ? <input type="text" id='title' 
             className="singlePostTitleInput" placeholder={post.title} value={this.props.Postdata.title} onChange={(e) => this.setState({title:e.target.value})}/> :
              <h1 className='singlePostTitle'>
                {post.title}
              <div className='singlePostEdit'>
              <i className='singlePostIcon fa fa-edit' onClick={this. handleClick} ></i>
              <i className='singlePostIcon fa fa-trash' onClick={deleteData(post._id)}></i>
              </div>
              </h1>
            }
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>Author: <b>Aman</b></span>
                <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            {
              this.state.update ? <textarea className="singlePostDescInput" id="desc" placeholder={post.desc} onChange={(e) => this.setState({desc:e.target.value})}></textarea> :
              <p className='singlePostDesc'>
              {post.desc}
              </p>
            }
            <button className='singlePostBtn' onClick={this.handleClickUpdate} >Update</button>
            </div>
            ))
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  console.log(state.data);
  return {Postdata: state.data}

}

const mapDispatchToProps = (dispatch) => {
  return {
     deleteData: (postId) => dispatch(deleteData(postId)),
     getData: (postId) => dispatch(getData(postId)),
     updateData: (postId, post) => dispatch(updateData(postId, post))

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SinglePost);