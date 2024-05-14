import { Injectable } from '@nestjs/common'
import { FindManyCompanyArgs, FindUniqueCompanyArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateCompanyInput } from './dtos/create-company.input'
import { UpdateCompanyInput } from './dtos/update-company.input'

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    description,
    displayName,
    managerId,
    managerName,
  }: CreateCompanyInput) {
    return this.prisma.company.create({
      data: {
        description,
        displayName,
        Managers: {
          create: {
            displayName: managerName,
            uid: managerId,
          },
        },
      },
    })
  }

  findAll(args: FindManyCompanyArgs) {
    return this.prisma.company.findMany(args)
  }

  findOne(args: FindUniqueCompanyArgs) {
    return this.prisma.company.findUnique(args)
  }

  update(updateCompanyInput: UpdateCompanyInput) {
    const { id, ...data } = updateCompanyInput
    return this.prisma.company.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueCompanyArgs) {
    return this.prisma.company.delete(args)
  }
}
