const app = require('../../src/app');

describe('\'wings\' service', () => {
  it('registered the service', () => {
    const service = app.service('wings');
    expect(service).toBeTruthy();
  });
});
