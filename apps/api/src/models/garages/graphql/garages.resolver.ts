import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { GaragesService } from './garages.service'
import { Garage } from './entity/garage.entity'
import { FindManyGarageArgs, FindUniqueGarageArgs } from './dtos/find.args'
import { CreateGarageInput } from './dtos/create-garage.input'
import { UpdateGarageInput } from './dtos/update-garage.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Slot } from 'src/models/slots/graphql/entity/slot.entity'
import { Address } from 'src/models/addresses/graphql/entity/address.entity'
import { Company } from 'src/models/companies/graphql/entity/company.entity'
import { Verification } from 'src/models/verifications/graphql/entity/verification.entity'

@Resolver(() => Garage)
export class GaragesResolver {
  constructor(
    private readonly garagesService: GaragesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('manager')
  @Mutation(() => Garage)
  createGarage(@Args('createGarageInput') args: CreateGarageInput) {
    return this.garagesService.create(args)
  }

  @Query(() => [Garage], { name: 'garages' })
  findAll(@Args() args: FindManyGarageArgs) {
    return this.garagesService.findAll(args)
  }

  @Query(() => Garage, { name: 'garage' })
  findOne(@Args() args: FindUniqueGarageArgs) {
    return this.garagesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Garage)
  async updateGarage(
    @Args('updateGarageInput') args: UpdateGarageInput,
    @GetUser() user: GetUserType,
  ) {
    const garage = await this.prisma.garage.findUnique({
      where: { id: args.id },
      include: { Company: { include: { Managers: true } } },
    })
    checkRowLevelPermission(
      user,
      garage.Company.Managers.map((man) => man.uid),
    )
    return this.garagesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Garage)
  async removeGarage(
    @Args() args: FindUniqueGarageArgs,
    @GetUser() user: GetUserType,
  ) {
    const garage = await this.prisma.garage.findUnique({
      where: { id: args.where.id },
      include: { Company: { include: { Managers: true } } },
    })
    checkRowLevelPermission(
      user,
      garage.Company.Managers.map((man) => man.uid),
    )
    return this.garagesService.remove(args)
  }

  @ResolveField(() => Verification, { nullable: true })
  async verification(@Parent() parent: Garage) {
    return this.prisma.verification.findUnique({
      where: { garageId: parent.id },
    })
  }

  @ResolveField(() => Company)
  company(@Parent() garage: Garage) {
    return this.prisma.company.findFirst({ where: { id: garage.companyId } })
  }

  @ResolveField(() => Address, { nullable: true })
  address(@Parent() garage: Garage) {
    return this.prisma.address.findFirst({ where: { garageId: garage.id } })
  }

  @ResolveField(() => [Slot])
  slots(@Parent() garage: Garage) {
    return this.prisma.slot.findMany({ where: { garageId: garage.id } })
  }
}
