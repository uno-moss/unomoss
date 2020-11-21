const path = require('path');
const express = require('express');
const app = express();

const models = require('./models/index');
const { sequelize } = require('./models');

const apiRouter = require('./routes/api');

app.use(express.json());

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  // check if user is logged in
  // return res.redirect(301, '/login');
  return res.render('./../dist/index.html');
});

// Catch-all route, send 404 message
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: `Express error handler caught unknown middleware error`,
    status: 400,
    message: { err: 'An error occurred' },
  };
  const error = Object.assign({}, defaultError, err);
  console.log(error);
  return res.status(error.status).json(error.message);
});

sequelize.sync({force: true}).then(() => {
  app.listen(3000, () => {
    console.log(`App listening on port 3000!`);
  });
});
