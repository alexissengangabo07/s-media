import React from 'react';
import Post from './post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.postReducer);

  console.log(posts);
  return (
    <div className='post-container'>
     {posts.map(post => (
      <div className="post" key={posts._id}>
        <Post post={post} />
      </div>
     ))}
    </div>
  )
}

export default Posts