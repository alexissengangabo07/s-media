import React from 'react';
import './style.css';

const Post = ({ post }) => {
  return (
    <>
      <div>{post.creator}</div>
      <div>{post.postImage}</div>
      <div>{post.title}</div>
      {post.tags.map((tag) => <span>#{tag}</span>)}
      <hr />
    </>
  )
}

export default Post