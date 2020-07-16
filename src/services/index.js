const users = require('./users/users.service.js');
const wings = require('./wings/wings.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(wings);
};
