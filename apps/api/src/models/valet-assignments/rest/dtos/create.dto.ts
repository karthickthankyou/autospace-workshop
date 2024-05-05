import { OmitType } from '@nestjs/swagger'
import { ValetAssignmentEntity } from '../entity/valet-assignment.entity'

export class CreateValetAssignment extends OmitType(ValetAssignmentEntity, [
  'createdAt',
  'updatedAt',
]) {}
