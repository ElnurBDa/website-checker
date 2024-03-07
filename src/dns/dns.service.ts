import { Injectable } from '@nestjs/common';
import { lookup } from 'dns';

@Injectable()
export class DnsService {
  async dnsLookup(domain: string): Promise<string[]> {
    console.log(`[DNS] ${domain} started`);
    return new Promise<string[]>((resolve, reject) => {
      lookup(domain, (err, addresses) => {
        if (err) {
          reject(err);
        } else {
          resolve([addresses]);
        }
        console.log(`[DNS] ${domain} finished`);
      });
    });
  }
}
