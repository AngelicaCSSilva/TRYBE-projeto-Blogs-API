const postService = require('../services/post.service');
const { authenticateToken } = require('../utils/authenticateToken');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;
  const user = await authenticateToken(token);

  const newPost = await postService.createPost({ title, content, categoryIds }, user.id);
  res.status(201).json(newPost);
};

const getPosts = async (_req, res) => {
  const posts = await postService.getPosts();
  res.status(200).json(posts);
};

module.exports = {
  createPost,
  getPosts,
};