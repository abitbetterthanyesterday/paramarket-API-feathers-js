// Initializes the `wings` service on path `/wings`
const { Wings } = require('./wings.class');
const createModel = require('../../models/wings.model');
const hooks = require('./wings.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/wings', new Wings(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('wings');

  service.hooks(hooks);
};
