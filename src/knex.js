const knex = require('knex');

module.exports = function (app) {
  // const { client, connection } = app.get('mysql');
  client = "mysql2",
  connection = `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:3306/API_paramarket`
  const db = knex({ client, connection });

  app.set('knexClient', db);
};
