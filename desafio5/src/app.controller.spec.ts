import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Default Page with challenges 5"', () => {
      expect(appController.getHello()).toBe(
        '<html><title>Maratona Full Cycle 4.0</title><body><br /><br /><br /><br /><center>' +
          '<img width="120" height="40" ' +
          'src="https://github.com/trainningjava/Maratona-Full-Cycle-4.0/blob/master/public/assets/images/grupo_4378.png?raw=true"></center>' +
          '<br /><br /><center>D E S A F I O 5</center>2</body></html>',
      );
    });
  });
});
