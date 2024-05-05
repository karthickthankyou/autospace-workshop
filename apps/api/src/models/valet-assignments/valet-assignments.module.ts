import { Module } from '@nestjs/common'
import { ValetAssignmentsService } from './graphql/valet-assignments.service'
import { ValetAssignmentsResolver } from './graphql/valet-assignments.resolver'
import { ValetAssignmentsController } from './rest/valet-assignments.controller'

@Module({
  providers: [ValetAssignmentsResolver, ValetAssignmentsService],
  exports: [ValetAssignmentsService],
  controllers: [ValetAssignmentsController],
})
export class ValetAssignmentsModule {}
