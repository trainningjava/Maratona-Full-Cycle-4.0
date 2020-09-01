import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<html><title>Categories</title><body><br /><br /><br /><br /><center><h1 style="color:blue;">Maratona Full Cycle 4.0</h1></center><br /><br /> <center><a href="/api">Category API</a> </center></body></hhtml>';
  }
}
