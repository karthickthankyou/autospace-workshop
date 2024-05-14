import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { CompaniesService } from './companies.service'
import { Company } from './entity/company.entity'
import { FindManyCompanyArgs, FindUniqueCompanyArgs } from './dtos/find.args'
import { CreateCompanyInput } from './dtos/create-company.input'
import { UpdateCompanyInput } from './dtos/update-company.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Manager } from 'src/models/managers/graphql/entity/manager.entity'
import { Garage } from 'src/models/garages/graphql/entity/garage.entity'

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(
    private readonly companiesService: CompaniesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Company)
  createCompany(
    @Args('createCompanyInput') args: CreateCompanyInput,
    @GetUser() user: GetUserType,
  ) {
    const managerId = args.managerId

    checkRowLevelPermission(user, managerId)
    return this.companiesService.create(args)
  }

  @AllowAuthenticated()
  @Query(() => [Company], { name: 'companies' })
  findAll(@Args() args: FindManyCompanyArgs) {
    return this.companiesService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => Company)
  myCompany(@GetUser() user: GetUserType) {
    return this.prisma.company.findFirst({
      where: { Managers: { some: { uid: user.uid } } },
    })
  }

  @Query(() => Company, { name: 'company' })
  findOne(@Args() args: FindUniqueCompanyArgs) {
    return this.companiesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Company)
  async updateCompany(
    @Args('updateCompanyInput') args: UpdateCompanyInput,
    @GetUser() user: GetUserType,
  ) {
    const company = await this.prisma.company.findUnique({
      where: { id: args.id },
      include: { Managers: true },
    })
    checkRowLevelPermission(
      user,
      company.Managers.map((man) => man.uid),
    )
    return this.companiesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Company)
  async removeCompany(
    @Args() args: FindUniqueCompanyArgs,
    @GetUser() user: GetUserType,
  ) {
    const company = await this.prisma.company.findUnique({
      ...args,
      include: { Managers: true },
    })
    checkRowLevelPermission(
      user,
      company.Managers.map((man) => man.uid),
    )
    return this.companiesService.remove(args)
  }

  @ResolveField(() => [Garage])
  garages(@Parent() company: Company) {
    return this.prisma.garage.findMany({ where: { companyId: company.id } })
  }

  @ResolveField(() => [Manager])
  managers(@Parent() company: Company) {
    return this.prisma.manager.findMany({ where: { companyId: company.id } })
  }
}
