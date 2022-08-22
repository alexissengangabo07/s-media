import React, { useState } from 'react'
import {
  TextField, Button, FormGroup, FormLabel, ButtonGroup, Paper, Typography
} from '@mui/material';
import FileBase from 'react-file-base64';
import axios from 'axios';

function Form() {
  let [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  });

  const submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000', { ...postData })
      .then((response) => console.log(response))
      .catch(err => console.log('Erruer', err));
  }

  return (
    <Paper style={{ padding: 20, marginTop: 20 }}>
      <form encType='multipart/form-data' autoComplete="off" onSubmit={submitForm}>
        <Typography variant='h6' style={{ textAlign: 'center' }}>Create a post</Typography>
        <FormGroup style={{ marginTop: 20 }}>
          <TextField name='creator' size='small' fullWidth label="Creator" onChange={(e) => setPostData({ ...postData, creator: e.target.value })} value={postData.creator} />
        </FormGroup>
        <FormGroup style={{ marginTop: 20 }}>
          <TextField name='title' size='small' fullWidth label="Title" onChange={(e) => setPostData({ ...postData, title: e.target.value })} value={postData.title} />
        </FormGroup>
        <FormGroup style={{ marginTop: 15 }}>
          <TextField name='message' fullWidth size='small' value={postData.message} label="Message" onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        </FormGroup>
        <FormGroup style={{ marginTop: 15 }}>
          <TextField name='tags' fullWidth size='small' value={postData.tags} label="Tags" onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        </FormGroup>
        <FormGroup style={{ marginTop: 15 }}>
          <FormLabel>File</FormLabel>
          <Button variant='contained' color='inherit'>
            <input type="file" style={{width: '100%', height: '100%'}} value={postData.selectedFile} onChange={(e) => setPostData({ ...postData, selectedFile: e.target.value })} />
          </Button>
          {/* <FileBase name="selectedFile" type='file' multiple={false} onDone={(base64) => setPostData({ ...postData, selectedFile: base64 })} /> */}
        </FormGroup>

        <FormGroup style={{ marginTop: 20 }}>
          <ButtonGroup size='medium' variant='contained' >
            <Button type='reset' color='warning' style={{ width: '50%' }}>CLEAR</Button>
            <Button type="sumbit" color="primary" style={{ width: '50%' }}>SUBMIT</Button>
          </ButtonGroup>
        </FormGroup>
      </form>
    </Paper>
  )
}

export default Form;