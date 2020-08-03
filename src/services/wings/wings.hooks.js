const { authenticate } = require('@feathersjs/authentication').hooks;
const { fastJoin } = require('feathers-hooks-common');
const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;


const sellerResolvers = {
  joins: {
    seller: (...args) => async (wing, context) => wing.seller = (await context.app.service('/users').find({ query: {
      id: wing.seller_id
    } })).data[0]
  }
};

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
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('seller.password')],
    find: [fastJoin(sellerResolvers),protect('seller.password')],
    get: [fastJoin(sellerResolvers),protect('seller.password')],
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
