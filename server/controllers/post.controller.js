import postModel from "../models/post.model.js";

export const getPosts = (req, res) => {
    res.send('This work !');
}

export const createPost = async (req, res) => {
    try {
        const posts = await postModel.find();
        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({message: error});
    }
}