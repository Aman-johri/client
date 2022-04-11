import React from "react";
import { Link } from "react-router-dom";
import SinglePost from "../singlePost/SinglePost";
import "./post.css";


class Post extends React.Component {

    render(){
        return(
            <div className="post">
                <img className="posting"
                 src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                 <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">{this.props.post.categories}</span>
                    </div>
                    <Link to={`/single/${this.props.post._id}`}>
                    <span className="postTitle">{this.props.post.title}</span>
                    </Link>
                    <hr/>
                    <span className="postDate">{new Date(this.props.post.createdAt).toDateString()}</span>
                </div>
            </div>
        );
    }
}

export default Post;