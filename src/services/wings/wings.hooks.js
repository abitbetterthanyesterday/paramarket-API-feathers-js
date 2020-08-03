const { authenticate } = require('@feathersjs/authentication').hooks;
const { fastJoin } = require('feathers-hooks-common');


// const sellerResolvers = {
//   joins: {
//     seller: (...args) => async (post, context) => wing.seller_id = (await context.app.service('/users').find({
//       query: { id: wing.seller_id },
//       paginate: false
//     }))[0],
//   }
// };


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
    //Join the seller details.
    all: [ fastJoin(sellerResolvers)],
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
