import { Field, ObjectType } from '@nestjs/graphql'
import { Admin as AdminType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Admin implements RestrictProperties<Admin, AdminType> {
  @Field()
  uid: string
  createdAt: Date
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
