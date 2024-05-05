import { InputType, PickType } from '@nestjs/graphql'
import { Admin } from '../entity/admin.entity'

@InputType()
export class CreateAdminInput extends PickType(Admin, ['uid'], InputType) {}
