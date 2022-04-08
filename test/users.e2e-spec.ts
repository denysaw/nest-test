import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UsersModule } from '../src/users/users.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('get all users', () => {
    return request(app.getHttpServer()).get('/users').expect(200).expect([]);
  });

  it('add new user success', async () => {
    await request(app.getHttpServer())
      .post('/users')
      .send({
        firstName: "D'Artanyan",
        lastName: 'Pagasyan',
        age: 18,
      })
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('id');
      });
  });

  // .... and so on
});
