import { InputType, PickType } from '@nestjs/graphql'
import { Garage } from '../entity/garage.entity'
import { CreateAddressInputWithoutGarageId } from 'src/models/addresses/graphql/dtos/create-address.input'
import { CreateSlotInputWithoutGarageId } from 'src/models/slots/graphql/dtos/create-slot.input'

@InputType()
export class CreateGarageInput extends PickType(
  Garage,
  ['description', 'displayName', 'images'],
  InputType,
) {
  Address: CreateAddressInputWithoutGarageId
  Slots: CreateSlotInputWithoutGarageId[]
}
