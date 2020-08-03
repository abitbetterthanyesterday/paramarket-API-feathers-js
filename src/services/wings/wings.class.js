const { Service } = require('feathers-knex');

exports.Wings = class Wings extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'wings'
    });
  }

    async find(params){
      console.log(params);
    return super.find(params);
  }

  // create(data,params){
    // return super.create(data,params);
  // }
};
