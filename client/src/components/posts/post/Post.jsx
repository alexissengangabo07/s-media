import React from 'react';
import './style.css';
import moment from 'moment';

const Post = ({ post }) => {
  return (
    <>
      <div>{post.creator}</div>
      <div>{post.postImage}</div>
      <div>{post.title}</div>
      {post.tags.map((tag) => <span>#{tag}</span>)}
      <div>
        {moment(new Date())}
      </div>
      <hr />
    </>
  )
}

export default Post