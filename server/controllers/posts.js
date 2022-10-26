import Post from "../models/post.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        console.log(posts)

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new Post(post);

    try {
        await newPost.save();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const post = req.body;

    const updatedPost = await findOneAndUpdate(id, post, { new: true });
}