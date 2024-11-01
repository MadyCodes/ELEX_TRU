const request = require('supertest');
const app = require('../app');
const User = require('../models/User');
const mongoose = require('mongoose');

describe('User Profile CRUD Operations', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should get a user profile', async () => {
    const user = await User.create({
      name: 'Test User',
      email: 'testuser@example.com',
      password: 'password123',
    });

    const loginRes = await request(app).post('/api/auth/login').send({
      email: 'testuser@example.com',
      password: 'password123',
    });
    const token = loginRes.body.token;

    const res = await request(app)
      .get('/api/users/profile')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'Test User');
  });
});
