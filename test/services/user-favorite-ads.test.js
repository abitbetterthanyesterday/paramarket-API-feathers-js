const app = require('../../src/app');

describe('\'UserFavoriteAds\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-favorite-ads');
    expect(service).toBeTruthy();
  });
});
