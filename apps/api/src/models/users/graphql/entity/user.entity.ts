import { Field, ObjectType } from '@nestjs/graphql'
import { User as UserType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  uid: string
  createdAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  name: string

  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
