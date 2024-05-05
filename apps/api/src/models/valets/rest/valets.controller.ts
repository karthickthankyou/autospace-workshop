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
import { CreateValet } from './dtos/create.dto'
import { ValetQueryDto } from './dtos/query.dto'
import { UpdateValet } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ValetEntity } from './entity/valet.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('valets')
@Controller('valets')
export class ValetsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ValetEntity })
  @Post()
  create(@Body() createValetDto: CreateValet, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, createValetDto.uid)
    return this.prisma.valet.create({ data: createValetDto })
  }

  @ApiOkResponse({ type: [ValetEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ValetQueryDto) {
    return this.prisma.valet.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ValetEntity })
  @Get(':uid')
  findOne(@Param('uid') uid: string) {
    return this.prisma.valet.findUnique({ where: { uid } })
  }

  @ApiOkResponse({ type: ValetEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':uid')
  async update(
    @Param('uid') uid: string,
    @Body() updateValetDto: UpdateValet,
    @GetUser() user: GetUserType,
  ) {
    const valet = await this.prisma.valet.findUnique({ where: { uid } })
    checkRowLevelPermission(user, valet.uid)
    return this.prisma.valet.update({
      where: { uid },
      data: updateValetDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':uid')
  async remove(@Param('uid') uid: string, @GetUser() user: GetUserType) {
    const valet = await this.prisma.valet.findUnique({ where: { uid } })
    checkRowLevelPermission(user, valet.uid)
    return this.prisma.valet.delete({ where: { uid } })
  }
}
