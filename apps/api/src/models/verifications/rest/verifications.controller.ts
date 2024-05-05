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
import { CreateVerification } from './dtos/create.dto'
import { VerificationQueryDto } from './dtos/query.dto'
import { UpdateVerification } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { VerificationEntity } from './entity/verification.entity'
import { AllowAuthenticated } from 'src/common/auth/auth.decorator'

@ApiTags('verifications')
@Controller('verifications')
export class VerificationsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated('admin')
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: VerificationEntity })
  @Post()
  create(@Body() createVerificationDto: CreateVerification) {
    return this.prisma.verification.create({ data: createVerificationDto })
  }

  @ApiOkResponse({ type: [VerificationEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: VerificationQueryDto) {
    return this.prisma.verification.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: VerificationEntity })
  @Get(':garageId')
  findOne(@Param('garageId') garageId: number) {
    return this.prisma.verification.findUnique({ where: { garageId } })
  }

  @ApiOkResponse({ type: VerificationEntity })
  @ApiBearerAuth()
  @AllowAuthenticated('admin')
  @Patch(':garageId')
  async update(
    @Param('garageId') garageId: number,
    @Body() updateVerificationDto: UpdateVerification,
  ) {
    return this.prisma.verification.update({
      where: { garageId },
      data: updateVerificationDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated('admin')
  @Delete(':garageId')
  async remove(@Param('garageId') garageId: number) {
    return this.prisma.verification.delete({ where: { garageId } })
  }
}
