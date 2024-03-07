import {
  Body,
  Controller,
  Get,
} from '@nestjs/common';
import { DnsService } from './dns.service';

@Controller('dns')
export class DnsController {
  constructor(private readonly dnsService: DnsService) {}

  @Get()
  async dnsLookup(@Body('domain') domain: string) {
    return await this.dnsService.dnsLookup(domain);
  }
}
