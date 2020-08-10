const { Service } = require('feathers-knex');

exports.UserFavoriteAds = class UserFavoriteAds extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'user_favorite_ads'
    });
  }
};
