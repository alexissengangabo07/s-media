import React, {useEffect, useState} from 'react'
import Post from './post/Post'
import axios from 'axios'

const Posts = () => {
    const [posts, setPost] = useState('');
    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(data => console.log('ok', data))
            .catch(err => console.log(err))
    }, [posts]);

    return (
        <>
            <div>Posts +</div>
            <Post />
        </>
    )
}

export default Posts