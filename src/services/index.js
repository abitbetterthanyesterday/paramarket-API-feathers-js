const users = require('./users/users.service.js');
const wings = require('./wings/wings.service.js');
const userFavoriteAds = require('./user-favorite-ads/user-favorite-ads.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(wings);
  app.configure(userFavoriteAds);
};
