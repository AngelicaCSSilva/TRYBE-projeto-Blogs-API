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

const getSearchPost = async (req, res) => {
  const { q } = req.query;

  const posts = q ? await postService.getSearchPost(q) : await postService.getPosts();
  res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;

  const token = req.headers.authorization;
  const user = await authenticateToken(token);

  const post = await postService.updatePost(id, user.id, req.body);
  res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  const token = req.headers.authorization;
  const user = await authenticateToken(token);

  await postService.deletePost(id, user.id);
  res.status(204).end();
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  getSearchPost,
};