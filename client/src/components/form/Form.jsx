import React, { useState } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { createPostAction } from '../../actions/postAction';

const Form = () => {
  const [postData, setPostData] = useState({ creator: 'alex', title: 'ok', message: 'oklm', tags: '', postImage: '' });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createPostAction(postData));
    clear();
  }

  const clear = () => {
    setPostData({ creator: '', title: '', message: '', tags: '', postImage: '' });
  }

  return (
    <div className="form-container">
      <form autoComplete="off" className="formulaire" onSubmit={handleSubmit}>
        <h3>Create an awesome post </h3>
        <div className='form-group'>
          <label>Creator</label>
          <input name="creator" className="form-input" placeholder="Creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        </div>
        <div className='form-group'>
          <label>Title</label>
          <input name="title" className="form-input" placeholder="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        </div>
        <div className='form-group'>
          <label>Message</label>
          <textarea name="message" className='form-textarea' rows="10" placeholder='Message' onChange={(e) => setPostData({ ...postData, message: e.target.value })} value={postData.message}></textarea>
        </div>
        <div className='form-group'>
          <input type="text" name="tags" className="form-input" placeholder="Tags (coma separated)" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        </div>
        <div className="file-container form-group">
          <input type="file" value={postData.selectedFile} onChange={(e) => setPostData({ ...postData, postImage: e.target.value })} />
        </div>
        <div className='form-group'>
          <button className="btn-sumit-post" type="submit">Submit</button>
          <button onClick={clear}>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default Form;