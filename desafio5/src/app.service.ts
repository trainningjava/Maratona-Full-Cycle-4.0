import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<html><title>Maratona Full Cycle 4.0</title><body><br /><br /><br /><br /><center><h1 style="color:blue;">Maratona Full Cycle 4.0</h1></center><br /><br /><center>D E S A F I O 5</center></body></hhtml>';
  }
}
