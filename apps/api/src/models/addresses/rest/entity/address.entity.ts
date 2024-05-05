import { Address } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class AddressEntity
  implements RestrictProperties<AddressEntity, Address>
{
  id: number
  createdAt: Date
  updatedAt: Date
  address: string
  lat: number
  lng: number
  @IsOptional()
  garageId: number
}
