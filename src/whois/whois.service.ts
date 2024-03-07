import { Injectable } from '@nestjs/common';

@Injectable()
export class WhoisService {
  async whois(domain: string): Promise<string> {
    return `Whois of ${domain}`;
  }
}
