import { Module } from '@nestjs/common'
import { AdminsService } from './graphql/admins.service'
import { AdminsResolver } from './graphql/admins.resolver'
import { AdminsController } from './rest/admins.controller'

@Module({
  providers: [AdminsResolver, AdminsService],
  exports: [AdminsService],
  controllers: [AdminsController],
})
export class AdminsModule {}
