import { Module } from '@nestjs/common'
import { CompaniesService } from './graphql/companies.service'
import { CompaniesResolver } from './graphql/companies.resolver'
import { CompaniesController } from './rest/companies.controller'

@Module({
  providers: [CompaniesResolver, CompaniesService],
  exports: [CompaniesService],
  controllers: [CompaniesController],
})
export class CompaniesModule {}
