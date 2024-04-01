import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class User {
  uid: string
}
