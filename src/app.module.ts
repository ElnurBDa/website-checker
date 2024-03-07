import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DnsModule } from './dns/dns.module';
import { WhoisModule } from './whois/whois.module';

@Module({
  imports: [DnsModule, WhoisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
