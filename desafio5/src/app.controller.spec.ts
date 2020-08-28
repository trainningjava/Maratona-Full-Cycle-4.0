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
    it('should return "D E S A F I O 5"', () => {
      expect(appController.getHello()).toBe(
        '<html><title>Maratona Full Cycle 4.0</title><body><br /><br /><br /><br /><center><h1 style="color:blue;">Maratona Full Cycle 4.0</h1></center><br /><br /><center>D E S A F I O 5</center></body></hhtml>',
      );
    });
  });
});
