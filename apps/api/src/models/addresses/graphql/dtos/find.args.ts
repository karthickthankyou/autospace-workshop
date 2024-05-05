import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AddressOrderByWithRelationInput } from './order-by.args'
import { AddressWhereInput, AddressWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.AddressScalarFieldEnum, {
  name: 'AddressScalarFieldEnum',
})

@ArgsType()
class FindManyAddressArgsStrict
  implements
    RestrictProperties<
      FindManyAddressArgsStrict,
      Omit<Prisma.AddressFindManyArgs, 'include' | 'select'>
    >
{
  where: AddressWhereInput
  orderBy: AddressOrderByWithRelationInput[]
  cursor: AddressWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.AddressScalarFieldEnum])
  distinct: Prisma.AddressScalarFieldEnum[]
}

@ArgsType()
export class FindManyAddressArgs extends PartialType(
  FindManyAddressArgsStrict,
) {}

@ArgsType()
export class FindUniqueAddressArgs {
  where: AddressWhereUniqueInput
}
