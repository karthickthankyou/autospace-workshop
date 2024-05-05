import { Valet } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class ValetEntity implements RestrictProperties<ValetEntity, Valet> {
  uid: string
  createdAt: Date
  updatedAt: Date
  displayName: string
  @IsOptional()
  image: string
  licenceID: string
  @IsOptional()
  companyId: number
}
