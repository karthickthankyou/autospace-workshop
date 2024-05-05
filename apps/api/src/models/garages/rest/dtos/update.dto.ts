import { PartialType } from '@nestjs/swagger'
import { CreateGarage } from './create.dto'
import { Garage } from '@prisma/client'

export class UpdateGarage extends PartialType(CreateGarage) {
  id: Garage['id']
}
