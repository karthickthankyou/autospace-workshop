import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { AddressesService } from './addresses.service'
import { Address } from './entity/address.entity'
import { FindManyAddressArgs, FindUniqueAddressArgs } from './dtos/find.args'
import { CreateAddressInput } from './dtos/create-address.input'
import { UpdateAddressInput } from './dtos/update-address.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Garage } from 'src/models/garages/graphql/entity/garage.entity'

@Resolver(() => Address)
export class AddressesResolver {
  constructor(
    private readonly addressesService: AddressesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Address)
  async createAddress(
    @Args('createAddressInput') args: CreateAddressInput,
    @GetUser() user: GetUserType,
  ) {
    const garage = await this.prisma.garage.findUnique({
      where: { id: args.garageId },
      include: { Company: { include: { Managers: true } } },
    })
    checkRowLevelPermission(
      user,
      garage.Company.Managers.map((man) => man.uid),
    )
    return this.addressesService.create(args)
  }

  @Query(() => [Address], { name: 'addresses' })
  findAll(@Args() args: FindManyAddressArgs) {
    return this.addressesService.findAll(args)
  }

  @Query(() => Address, { name: 'address' })
  findOne(@Args() args: FindUniqueAddressArgs) {
    return this.addressesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Address)
  async updateAddress(
    @Args('updateAddressInput') args: UpdateAddressInput,
    @GetUser() user: GetUserType,
  ) {
    const address = await this.prisma.address.findUnique({
      where: { id: args.id },
      include: {
        Garage: {
          include: { Company: { include: { Managers: true } } },
        },
      },
    })
    checkRowLevelPermission(
      user,
      address.Garage.Company.Managers.map((man) => man.uid),
    )
    return this.addressesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Address)
  async removeAddress(
    @Args() args: FindUniqueAddressArgs,
    @GetUser() user: GetUserType,
  ) {
    const address = await this.prisma.address.findUnique({
      where: { id: args.where.id },
      include: {
        Garage: {
          include: { Company: { include: { Managers: true } } },
        },
      },
    })
    checkRowLevelPermission(
      user,
      address.Garage.Company.Managers.map((man) => man.uid),
    )
    return this.addressesService.remove(args)
  }

  @ResolveField(() => Garage, { nullable: true })
  garage(@Parent() address: Address) {
    return this.prisma.company.findFirst({ where: { id: address.garageId } })
  }
}
