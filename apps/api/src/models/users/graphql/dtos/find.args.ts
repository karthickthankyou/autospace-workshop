import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UserOrderByWithRelationInput } from './order-by.args'
import { UserWhereInput, UserWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
})

@ArgsType()
class FindManyUserArgsStrict
  implements
    RestrictProperties<
      FindManyUserArgsStrict,
      Omit<Prisma.UserFindManyArgs, 'include' | 'select'>
    >
{
  where: UserWhereInput
  orderBy: UserOrderByWithRelationInput[]
  cursor: UserWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.UserScalarFieldEnum])
  distinct: Prisma.UserScalarFieldEnum[]
}

@ArgsType()
export class FindManyUserArgs extends PartialType(FindManyUserArgsStrict) {}

@ArgsType()
export class FindUniqueUserArgs {
  where: UserWhereUniqueInput
}
