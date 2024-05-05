import { Field, ObjectType } from '@nestjs/graphql'
import { Verification as VerificationType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class Verification
  implements RestrictProperties<Verification, VerificationType>
{
  @Field()
  createdAt: Date
  updatedAt: Date
  verified: boolean
  adminId: string
  @Field()
  garageId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
