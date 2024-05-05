import { Module } from '@nestjs/common'
import { ValetsService } from './graphql/valets.service'
import { ValetsResolver } from './graphql/valets.resolver'
import { ValetsController } from './rest/valets.controller'

@Module({
  providers: [ValetsResolver, ValetsService],
  exports: [ValetsService],
  controllers: [ValetsController],
})
export class ValetsModule {}
