import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className='singlePostTitle'>
            Lorem ipsum dolor sit amet.
        <div className='singlePostEdit'>
            <i className='singlePostIcon fa fa-edit'></i>
            <i className='singlePostIcon fa fa-trash'></i>
        </div>
        </h1>
        <div className='singlePostInfo'>
            <span className='singlePostAuthor'>Author: <b>Aman</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, 
            aliquid debitis. Officiis eligendi nesciunt eaque, 
            aperiam aut enim reiciendis culpa beatae minus amet dolor temporibus expedita cupiditate numquam,
            quam quod commodi nemo eos nam in consequatur quis esse? Nulla voluptatem omnis assumenda debitis minus incidunt, 
            error temporibus veritatis necessitatibus nostrum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, 
            aliquid debitis. Officiis eligendi nesciunt eaque, 
            aperiam aut enim reiciendis culpa beatae minus amet dolor temporibus expedita cupiditate numquam,
            quam quod commodi nemo eos nam in consequatur quis esse? Nulla voluptatem omnis assumenda debitis minus incidunt, 
            error temporibus veritatis necessitatibus nostrum.
        </p>
        </div>
    </div>
  )
}
