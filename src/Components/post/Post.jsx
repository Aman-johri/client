import React from "react";
import "./post.css";
import {Link} from "react-router-dom";

class Post extends React.Component{
    
    render(){
        return(
            <div className="post">
                <img className="posting"
                 src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                 <div className="postInfo">
                     <div className="postCats">
                         <span className="postCat">Music</span>
                         <span className="postCat">Life</span>
                    </div>
                    <span className="postTitle">
                        <Link to="/single">Lorem ipsum dolor</Link>
                    </span>
                    <hr/>
                    <span className="postDate">1 hour ago</span>
                </div>
            </div>
        );
    }
}
export default Post;