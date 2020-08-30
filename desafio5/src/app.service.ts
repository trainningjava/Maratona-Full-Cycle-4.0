import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return (
      '<html><title>Maratona Full Cycle 4.0</title><body><br /><br /><br /><br /><center>' +
      '<img width="120" height="40" ' +
      'src="https://github.com/trainningjava/Maratona-Full-Cycle-4.0/blob/master/public/assets/images/grupo_4378.png?raw=true"></center>' +
      '<br /><br /><center>D E S A F I O 5</center>2</body></html>'
    );
  }
}
