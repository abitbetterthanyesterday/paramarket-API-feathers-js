const { authenticate } = require('@feathersjs/authentication').hooks;

const isAdmin = require('../../hooks/is-admin');

module.exports = {
  before: {
    all: [ isAdmin(), 
    // authenticate('jwt') 
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
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
