const request = require('supertest');
const app = require('../app');

describe('Auth Routes', () => {
  it('should signup a user', async () => {
    const res = await request(app).post('/api/auth/signup').send({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
  });
});
