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
import { CreateReview } from './dtos/create.dto'
import { ReviewQueryDto } from './dtos/query.dto'
import { UpdateReview } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { ReviewEntity } from './entity/review.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'

@ApiTags('reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ReviewEntity })
  @Post()
  create(@Body() createReviewDto: CreateReview, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, createReviewDto.customerId)
    return this.prisma.review.create({ data: createReviewDto })
  }

  @ApiOkResponse({ type: [ReviewEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ReviewQueryDto) {
    return this.prisma.review.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: ReviewEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.review.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: ReviewEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateReviewDto: UpdateReview,
    @GetUser() user: GetUserType,
  ) {
    const review = await this.prisma.review.findUnique({ where: { id } })
    checkRowLevelPermission(user, review.customerId)
    return this.prisma.review.update({
      where: { id },
      data: updateReviewDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number, @GetUser() user: GetUserType) {
    const review = await this.prisma.review.findUnique({ where: { id } })
    checkRowLevelPermission(user, review.customerId)
    return this.prisma.review.delete({ where: { id } })
  }
}
