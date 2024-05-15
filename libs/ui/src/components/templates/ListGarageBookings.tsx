'use client'
import { useState } from 'react'
import { Tab, TabPanel, Tabs } from '../molecules/Tabs'
import { ShowGarageBookings } from '../organisms/ShowGarageBookings'
import { BookingStatus } from '@autospace/network/src/gql/generated'

export interface IListBookingsProps {
  garageId: number
}
export const ListGarageBookings = ({ garageId }: IListBookingsProps) => {
  const [value, setValue] = useState<0 | 1 | 2>(0)

  return (
    <div>
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        aria-label="bookings"
      >
        <Tab label={'IN'} />
        <Tab label={'OUT'} />
        <Tab label={'RESOLVED'} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ShowGarageBookings
          garageId={garageId}
          statuses={[
            BookingStatus.Booked,
            BookingStatus.ValetPickedUp,
            BookingStatus.ValetAssignedForCheckIn,
          ]}
          showCheckIn
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ShowGarageBookings
          garageId={garageId}
          statuses={[
            BookingStatus.CheckedIn,
            BookingStatus.ValetAssignedForCheckOut,
          ]}
          showCheckOut
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ShowGarageBookings
          garageId={garageId}
          statuses={[BookingStatus.CheckedOut]}
        />
      </TabPanel>
    </div>
  )
}
