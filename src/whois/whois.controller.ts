import {
  Body,
  Controller,
  Get,
} from '@nestjs/common';
import { WhoisService } from './whois.service';

@Controller('whois')
export class WhoisController {
  constructor(private readonly whoisService: WhoisService) {}

  @Get()
  async whois(@Body('domain') domain: string) {
    return await this.whoisService.whoisLookup(domain);
  }
}
