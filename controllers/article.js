const Sequelize = require('sequelize');
const sequelize = new Sequelize("mysql://root:qwerty@localhost:3306/joga_mysql");

const models = require('../models');

const Article = require('../models/article')(sequelize, Sequelize.DataTypes);

const getAllArticles = async (req, res) => {
    models.Article.findAll()
        .then(articles => {
            console.log(articles);
            return res.status(200).json(articles);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: 'An error occurred while fetching articles.' });
        });
};

const getArticleBySlug = async (req, res) => {
    models.Article.findOne({ where: { slug: req.params.slug }, include: [{ model: models.Author, as: 'author' }] })
        .then(article => {
            console.log(article);
            return res.status(200).json(article);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: 'An error occurred while fetching the article.' });
        });
};

module.exports = {
    getAllArticles,
    getArticleBySlug
};