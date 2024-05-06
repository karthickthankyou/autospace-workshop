import {
  Field,
  InputType,
  ObjectType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql'
import { User } from '../entity/user.entity'
import { AuthProviderType } from '@prisma/client'

registerEnumType(AuthProviderType, {
  name: 'AuthProviderType',
})

@InputType()
export class RegisterWithProviderInput extends PickType(
  User,
  ['uid', 'name', 'image'],
  InputType,
) {
  @Field(() => AuthProviderType)
  type: AuthProviderType
}

@InputType()
export class RegisterWithCredentialsInput extends PickType(
  User,
  ['name', 'image'],
  InputType,
) {
  email: string
  password: string
}

@InputType()
export class LoginInput extends PickType(RegisterWithCredentialsInput, [
  'email',
  'password',
]) {}

@ObjectType()
export class LoginOutput {
  token: string
  user: User
}
