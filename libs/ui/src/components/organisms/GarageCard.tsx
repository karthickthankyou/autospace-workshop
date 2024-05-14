import { GaragesQuery } from '@autospace/network/src/gql/generated'
import { AutoImageChanger } from './AutoImageChanger'
import Link from 'next/link'
import { IconTypes } from '../molecules/IconTypes'
import { CreateManySlotsDialog } from './CreateManySlotsDialog'

export interface IGarageCardProps {
  garage: GaragesQuery['garages'][number]
}

export const GarageCard = ({ garage }: IGarageCardProps) => {
  return (
    <div className="overflow-hidden bg-white shadow-lg flex flex-col">
      <AutoImageChanger images={garage.images || []} durationPerImage={5000} />

      <div className="p-2 flex-grow flex flex-col gap-4">
        <div>
          <div className="flex justify-between ">
            <h3 className="font-semibold ">{garage.displayName}</h3>
            <Link
              className="text-sm underline underline-offset-4"
              href={{ pathname: 'bookings', query: { garageId: garage.id } }}
            >
              Bookings
            </Link>
          </div>
          <p className="text-gray-500 text-sm my-2 line-clamp-2 ">
            {garage.description}
          </p>
          <p className="text-sm text-gray-400">
            Address: {garage.address?.address}
          </p>
        </div>
        <div className="flex gap-2 mt-auto">
          <>
            {garage.slotCounts.map((slotType) => (
              <div
                key={slotType.type}
                className="flex items-center justify-center w-16 h-10 gap-1 border-2 border-primary"
              >
                <div>{IconTypes[slotType.type]}</div>
                <div className="text-sm">{slotType.count}</div>
              </div>
            ))}
            <CreateManySlotsDialog garageId={garage.id} />
          </>
        </div>
      </div>
    </div>
  )
}
