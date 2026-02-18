const express = require('express');
const app = express();

app.use(express.json());

app.get(express.urlencoded({ extended: true }));

const Sequelize = require('sequelize');
const sequelize = new Sequelize("mysql://root:password@localhost:3306/sequelize_db");

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

app.get('/', (req, res) => {
  res.json({ message: "welcome to sequelize application"});
});

app.listen(3000, () => {
    console.get("server is running on http://localhost:3000");
});