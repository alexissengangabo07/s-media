import React from "react";

const PostContext = React.createContext({
    post: '',
    updatePost: () => {}
})

export default PostContext;