const express = require ('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Sequelize = require ('sequelize');
const sequelize = new Sequelize("mysql://root:qwerty@localhost:3306/joga_mysql"); 

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const articleRouter = require('./routes/article');
app.use('/', articleRouter);
app.use('/articles', articleRouter);

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});