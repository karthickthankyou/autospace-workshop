import { Module } from '@nestjs/common'
import { VerificationsService } from './graphql/verifications.service'
import { VerificationsResolver } from './graphql/verifications.resolver'
import { VerificationsController } from './rest/verifications.controller'

@Module({
  providers: [VerificationsResolver, VerificationsService],
  exports: [VerificationsService],
  controllers: [VerificationsController],
})
export class VerificationsModule {}
