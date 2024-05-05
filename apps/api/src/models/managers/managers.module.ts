import { Module } from '@nestjs/common'
import { ManagersService } from './graphql/managers.service'
import { ManagersResolver } from './graphql/managers.resolver'
import { ManagersController } from './rest/managers.controller'

@Module({
  providers: [ManagersResolver, ManagersService],
  exports: [ManagersService],
  controllers: [ManagersController],
})
export class ManagersModule {}
