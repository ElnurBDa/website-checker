import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): string {
    return 'This application for checking website. Currently available: whois, dns';
  }
}
