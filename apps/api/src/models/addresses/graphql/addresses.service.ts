import { Injectable } from '@nestjs/common'
import { FindManyAddressArgs, FindUniqueAddressArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateAddressInput } from './dtos/create-address.input'
import { UpdateAddressInput } from './dtos/update-address.input'

@Injectable()
export class AddressesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAddressInput: CreateAddressInput) {
    return this.prisma.address.create({
      data: createAddressInput,
    })
  }

  findAll(args: FindManyAddressArgs) {
    return this.prisma.address.findMany(args)
  }

  findOne(args: FindUniqueAddressArgs) {
    return this.prisma.address.findUnique(args)
  }

  update(updateAddressInput: UpdateAddressInput) {
    const { id, ...data } = updateAddressInput
    return this.prisma.address.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueAddressArgs) {
    return this.prisma.address.delete(args)
  }
}
