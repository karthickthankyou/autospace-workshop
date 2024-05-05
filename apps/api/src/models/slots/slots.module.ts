import { Module } from '@nestjs/common'
import { SlotsService } from './graphql/slots.service'
import { SlotsResolver } from './graphql/slots.resolver'
import { SlotsController } from './rest/slots.controller'

@Module({
  providers: [SlotsResolver, SlotsService],
  exports: [SlotsService],
  controllers: [SlotsController],
})
export class SlotsModule {}
