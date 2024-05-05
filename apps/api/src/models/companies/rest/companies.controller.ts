import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'

import { PrismaService } from 'src/common/prisma/prisma.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateCompany } from './dtos/create.dto'
import { CompanyQueryDto } from './dtos/query.dto'
import { UpdateCompany } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { CompanyEntity } from './entity/company.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('companies')
@Controller('companies')
export class CompaniesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CompanyEntity })
  @Post()
  create(@Body() createCompanyDto: CreateCompany) {
    return this.prisma.company.create({ data: createCompanyDto })
  }

  @ApiOkResponse({ type: [CompanyEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: CompanyQueryDto) {
    return this.prisma.company.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: CompanyEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.company.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: CompanyEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCompanyDto: UpdateCompany,
    @GetUser() user: GetUserType,
  ) {
    const company = await this.prisma.company.findUnique({
      where: { id },
      include: { Managers: true },
    })
    checkRowLevelPermission(
      user,
      company.Managers.map((manager) => manager.uid),
    )
    return this.prisma.company.update({
      where: { id },
      data: updateCompanyDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number, @GetUser() user: GetUserType) {
    const company = await this.prisma.company.findUnique({
      where: { id },
      include: { Managers: true },
    })
    checkRowLevelPermission(
      user,
      company.Managers.map((manager) => manager.uid),
    )
    return this.prisma.company.delete({ where: { id } })
  }
}
