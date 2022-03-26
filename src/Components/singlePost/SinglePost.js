import React from 'react'
import "./singlePost.css";
import axios from 'axios'

class SinglePost extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      post:{},
    };
  }
  
  componentDidMount(){
   const postId = window.location.href.split("/")[4];
   console.log(postId);
    axios.get("http://localhost:5000/posts/"+postId)
    .then(res => {
      console.log(res);
      this.setState({post:res.data});
    })
    .catch(err => console.log(err));
  }

  //function to update the details to the api and update the state
  handleClickUpdate = () => {
    const postId = window.location.href.split("/")[4];
    console.log(postId);
    axios.put("http://localhost:5000/posts/"+postId,{
      title:this.state.post.title,
      desc:this.state.post.desc
    })
    .then(res => {
      console.log(res);
      this.setState({update:true});
    })
    .catch(err => console.log(err));
  }


  
  handleClickDelete = async () => {
    const postId = window.location.href.split("/")[4];
    const res = await axios.delete("http://localhost:5000/posts/"+postId);
    console.log(res);
    window.location.href = "/Home";
   }
   
   render(){
    console.log(this.props);
    return (
      <div className='singlePost'>
          <div className='singlePostWrapper'>
          <img
            className="singlePostImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
            <h1 className='singlePostTitle'>
            {this.state.post.title}
            <div className='singlePostEdit'>
            <i className='singlePostIcon fa fa-edit' onClick={this.handleClickUpdate}></i>
            <i className='singlePostIcon fa fa-trash' onClick={this.handleClickDelete}></i>
            </div>
            </h1>
          }
          <div className='singlePostInfo'>
              <span className='singlePostAuthor'>Author: <b>Aman</b></span>
              <span className='singlePostDate'>{new Date(this.state.post.createdAt).toDateString()}</span>
          </div>
          {
            this.state.update ?<textarea className="singlePostDescInput" value={this.state.post.desc} onChange={(e)=>this.setState({post:{...this.state.post,desc:e.target.value}})}></textarea>:
            <p className='singlePostDesc'>
            {this.state.post.desc}
          </p>
          }
          <button className='singlePostBtn' onClick={this.handleClickUpdate}>Update</button>
          </div>
      </div>
    )
  }
}

export default SinglePost;