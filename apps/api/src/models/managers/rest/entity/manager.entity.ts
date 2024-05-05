import { Manager } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ManagerEntity
  implements RestrictProperties<ManagerEntity, Manager>
{
  uid: string
  createdAt: Date
  updatedAt: Date
  @IsOptional()
  displayName: string
  @IsOptional()
  companyId: number
}
