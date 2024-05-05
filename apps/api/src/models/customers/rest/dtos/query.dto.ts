import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class CustomerQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.CustomerScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.CustomerScalarFieldEnum))
  searchBy?: string
}
