import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    postImage: String,
    likeCount: {
        type: String,
        default: 0
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('Post', postSchema);

export default Post;