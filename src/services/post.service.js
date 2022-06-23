const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const sequelizeConfig = require('../database/config/config');

const sequelize = new Sequelize(sequelizeConfig.development);

const { BlogPost, PostCategory, Category, User } = require('../database/models');
  
const categoriesValidation = async (categoryIds) => {
  const result = await Promise.all(
    categoryIds.map((categoryId) => (
      Category.findByPk(categoryId)
    )),
  );

  if (!result.every((category) => category !== null)) {
    const error = { status: 400, message: '"categoryIds" not found' };
    throw error;
  }
};

const createPost = async ({ title, content, categoryIds }, userId) => {
  await categoriesValidation(categoryIds);
  try {
    return sequelize.transaction(async (transaction) => {
      const newPost = await BlogPost.create(
        { title, content, userId, published: new Date(), updated: new Date() },
         { transaction },
        );
      await Promise.all(
        categoryIds.map((categoryId) => (
          PostCategory.create({ postId: newPost.dataValues.id, categoryId }, { transaction })
        )),
      );
      return newPost;
    });
  } catch (err) {
    const error = { status: 500, message: 'Internal error.' };
    throw error;
  }
};

const getPosts = async () => {
  const posts = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  return posts;
};

const getSearchPost = async (query) => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } },
      ],
    },
  });
  if (!posts) return [];
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({ where: { id },
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  return post;
};

const updatePost = async (id, userId, { title, content }) => {
  const oldPost = await BlogPost.findByPk(id);
  if (oldPost.userId !== userId) {
    const error = { status: 401, message: 'Unauthorized user' };
    throw error;
  }

  await BlogPost.update({ title, content }, { where: { id } });
  return getPostById(id);
};

const deletePost = async (id, userId) => {
  const oldPost = await BlogPost.findByPk(id);

  if (!oldPost) {
    const error = { status: 404, message: 'Post does not exist' };
    throw error;
  }

  if (oldPost.userId !== userId) {
    const error = { status: 401, message: 'Unauthorized user' };
    throw error;
  }

  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  getSearchPost,
};
