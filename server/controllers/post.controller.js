import postModel from "../models/post.model.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const newPost = new postModel({
        title: req.body.title,
        message: req.body.message,
        creator: req.body.creator,
        tags: req.body.tags,
        selectedFile: req.body.selectedFile,
        likeCount: req.body.likeCount
    });
    try {
        await newPost.save();
        res.status(201).json({message: 'post saved'});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
