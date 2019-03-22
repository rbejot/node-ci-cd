const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('respond with hey', done => {
    request(app).get('/').expect('hey', done);
  });
});