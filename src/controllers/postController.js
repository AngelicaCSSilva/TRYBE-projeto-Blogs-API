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

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  res.status(200).json(post);
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};