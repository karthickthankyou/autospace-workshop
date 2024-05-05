import { Company } from '@prisma/client'
import { IsDate, IsString, IsInt, IsOptional } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class CompanyEntity
  implements RestrictProperties<CompanyEntity, Company>
{
  id: number
  createdAt: Date
  updatedAt: Date
  @IsOptional()
  displayName: string
  @IsOptional()
  description: string
}
