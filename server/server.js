const path = require('path');
const express = require('express');
const app = express();

const models = require('./models');
const { sequelize } = require('./models');


app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json('ok');
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log(`App listening on port 3000!`)
  });
})
