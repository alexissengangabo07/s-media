import React, { useEffect, useState } from 'react';
import './App.css';
import { AppBar, Container, Grid, Typography, Grow } from '@mui/material';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import PostContext from './contexts/post.context';
import axios from 'axios';

function App() {

  let [posts, setPosts] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(({ data }) => {
        console.log(data);
        setPosts();
      })
      .catch(err => console.log(err));
  }, [posts]);

  return (
    <PostContext.Provider value={posts}>
      <Container maxWidth="lg">
        <AppBar position='static' color='inherit'>
          <Typography variant='h3' align='center'>My App</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container spacing={3} alignItems='stretch' justifyContent='space-between'>
              <Grid item xs={12} sm={7} >
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4} >
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </PostContext.Provider>
  );
}

export default App;
