import React from "react";
import "./post.css";
import {Link} from "react-router-dom";


export default class Post extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            post: this.props.post
        };

    }
    
    render(){
        return(
            <div className="post">
                <img className="posting"
                 src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                 <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">{this.state.post.categories}</span>
                    </div>
                    <Link to={`/single/${this.state.post._id}`}>
                    <span className="postTitle">{this.state.post.title}</span>
                    </Link>
                    {/* <a href={`/single/${this.state.post._id}`}>
                    <span className="postTitle">{this.state.post.title}</span>
                    </a> */}
                    <hr/>
                    <span className="postDate">{new Date(this.state.post.createdAt).toDateString()}</span>
                </div>
            </div>
        );

    }
}


  
  
  
  