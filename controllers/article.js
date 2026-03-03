const Sequelize = require('sequelize');
const sequelize = new Sequelize("mysql://root:qwerty@localhost:3306/joga_mysql");

const Article = require('../models/article')(sequelize, Sequelize.DataTypes);

const getAllArticles = async (req, res) => {
    const article = await Article.findAll();
    res.json(article);
};

const getArticleBySlug = async (req, res) => {
    Article.findOne({ where: { slug: req.params.slug } })
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