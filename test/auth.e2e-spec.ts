import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { RootModule } from '../src/root.module';
import { getModelToken } from '@nestjs/sequelize';
import { User } from '../src/users/models/user.model';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let userModel: typeof User;

  const mockUser = {
    username: 'testuser',
    email: 'test@example.com',
    password: 'password123',
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RootModule],
    })
      .overrideProvider(getModelToken(User))
      .useValue({
        findOne: jest.fn(),
        create: jest.fn().mockImplementation((values) => ({
          id: 1,
          ...values,
          validatePassword: jest.fn().mockResolvedValue(true),
        })),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    userModel = moduleFixture.get<typeof User>(getModelToken(User));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/auth/register (POST)', () => {
    it('should register a new user', () => {
      return request(app.getHttpServer())
        .post('/auth/register')
        .send(mockUser)
        .expect(201)
        .expect((res) => {
          expect(res.body.user).toBeDefined();
          expect(res.body.token).toBeDefined();
          expect(res.body.user.email).toBe(mockUser.email);
          expect(res.body.user.username).toBe(mockUser.username);
          expect(res.body.user.password).not.toBe(mockUser.password);
        });
    });

    it('should not register a user with existing email', () => {
      jest.spyOn(userModel, 'findOne').mockResolvedValueOnce(mockUser as any);

      return request(app.getHttpServer())
        .post('/auth/register')
        .send(mockUser)
        .expect(401);
    });
  });

  describe('/auth/login (POST)', () => {
    it('should login existing user', () => {
      jest.spyOn(userModel, 'findOne').mockResolvedValueOnce({
        id: 1,
        ...mockUser,
        validatePassword: jest.fn().mockResolvedValueOnce(true),
      } as any);

      return request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: mockUser.email,
          password: mockUser.password,
        })
        .expect(201)
        .expect((res) => {
          expect(res.body.user).toBeDefined();
          expect(res.body.token).toBeDefined();
          expect(res.body.user.email).toBe(mockUser.email);
        });
    });

    it('should not login with invalid credentials', () => {
      jest.spyOn(userModel, 'findOne').mockResolvedValueOnce({
        id: 1,
        ...mockUser,
        validatePassword: jest.fn().mockResolvedValueOnce(false),
      } as any);

      return request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: mockUser.email,
          password: 'wrongpassword',
        })
        .expect(401);
    });
  });
}); 