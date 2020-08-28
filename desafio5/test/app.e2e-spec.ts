import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(
        '<html><title>Maratona Full Cycle 4.0</title><body><br /><br /><br /><br /><center><img width="120" height="40" src="https://github.com/trainningjava/Maratona-Full-Cycle-4.0/blob/master/public/assets/images/grupo_4378.png"></center><br /><br /><center>D E S A F I O 5</center>2</body></html>',
      );
  });
});
