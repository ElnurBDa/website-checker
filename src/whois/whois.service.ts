import { Injectable } from '@nestjs/common';
import { lookup } from 'whois';

@Injectable()
export class WhoisService {
  async whoisLookup(domain: string): Promise<string> {
    console.log(`[WHOIS] ${domain} started`);
    return new Promise((resolve, reject) => {
      lookup(domain, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
        console.log(`[WHOIS] ${domain} finished`);
      });
    });
  }
}
