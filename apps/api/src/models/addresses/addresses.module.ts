import { Module } from '@nestjs/common'
import { AddressesService } from './graphql/addresses.service'
import { AddressesResolver } from './graphql/addresses.resolver'
import { AddressesController } from './rest/addresses.controller'

@Module({
  providers: [AddressesResolver, AddressesService],
  exports: [AddressesService],
  controllers: [AddressesController],
})
export class AddressesModule {}
