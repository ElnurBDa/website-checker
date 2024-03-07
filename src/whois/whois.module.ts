import { Module } from '@nestjs/common';
import { WhoisService } from './whois.service';
import { WhoisController } from './whois.controller';

@Module({
  imports: [],
  controllers: [WhoisController],
  providers: [WhoisService],
  exports: []
})
export class WhoisModule {}
