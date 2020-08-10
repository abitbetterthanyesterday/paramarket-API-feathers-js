// Initializes the `UserFavoriteAds` service on path `/user-favorite-ads`
const { UserFavoriteAds } = require('./user-favorite-ads.class');
const createModel = require('../../models/user-favorite-ads.model');
const hooks = require('./user-favorite-ads.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/user-favorite-ads', new UserFavoriteAds(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-favorite-ads');

  service.hooks(hooks);
};
