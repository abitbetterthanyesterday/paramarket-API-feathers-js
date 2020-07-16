const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [
      //For some reasons authenticate adds a an Authorization clause to the query. This removes it.
      context => {
        if (context.params.query.Authorization) delete context.params.query.Authorization;
      }
    ],
    find: [],
    get: [],
    create: [authenticate('jwt')],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
