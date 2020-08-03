const { Service } = require('feathers-knex');

exports.Wings = class Wings extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'wings'
    });
  }
};
