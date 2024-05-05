import { ValetAssignment } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ValetAssignmentEntity
  implements RestrictProperties<ValetAssignmentEntity, ValetAssignment>
{
  bookingId: number
  createdAt: Date
  updatedAt: Date
  pickupLat: number
  pickupLng: number
  @IsOptional()
  returnLat: number
  @IsOptional()
  returnLng: number
  pickupValetId: string
  returnValetId: string
}
