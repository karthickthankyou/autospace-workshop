import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql'
import { CustomersService } from './customers.service'
import { Customer } from './entity/customer.entity'
import { FindManyCustomerArgs, FindUniqueCustomerArgs } from './dtos/find.args'
import { CreateCustomerInput } from './dtos/create-customer.input'
import { UpdateCustomerInput } from './dtos/update-customer.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { User } from 'src/models/users/graphql/entity/user.entity'
import { Booking } from 'src/models/bookings/graphql/entity/booking.entity'

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(
    private readonly customersService: CustomersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Customer)
  createCustomer(
    @Args('createCustomerInput') args: CreateCustomerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.customersService.create(args)
  }

  @Query(() => [Customer], { name: 'customers' })
  findAll(@Args() args: FindManyCustomerArgs) {
    return this.customersService.findAll(args)
  }

  @Query(() => Customer, { name: 'customer' })
  findOne(@Args() args: FindUniqueCustomerArgs) {
    return this.customersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Customer)
  async updateCustomer(
    @Args('updateCustomerInput') args: UpdateCustomerInput,
    @GetUser() user: GetUserType,
  ) {
    const customer = await this.prisma.customer.findUnique({
      where: { uid: args.uid },
    })
    checkRowLevelPermission(user, customer.uid)
    return this.customersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Customer)
  async removeCustomer(
    @Args() args: FindUniqueCustomerArgs,
    @GetUser() user: GetUserType,
  ) {
    const customer = await this.prisma.customer.findUnique(args)
    checkRowLevelPermission(user, customer.uid)
    return this.customersService.remove(args)
  }

  @ResolveField(() => User, { nullable: true })
  user(@Parent() customer: Customer) {
    return this.prisma.user.findUnique({ where: { uid: customer.uid } })
  }

  @ResolveField(() => [Booking])
  bookings(@Parent() customer: Customer) {
    return this.prisma.booking.findMany({ where: { customerId: customer.uid } })
  }
}
