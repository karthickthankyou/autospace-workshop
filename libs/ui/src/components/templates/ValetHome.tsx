import { useState } from 'react'
import { Tab, TabPanel, Tabs } from '../molecules/Tabs'
import { ShowValetAllPickupTrips } from '../organisms/ShowValetAllPickupTrips'
import { ShowValetAllDropTrips } from '../organisms/ShowValetAllDropTrips'

export const ValetHome = () => {
  const [value, setValue] = useState<0 | 1>(0)

  return (
    <>
      <Tabs
        value={value}
        onChange={(e, v) => setValue(v)}
        aria-label="bookings"
      >
        <Tab label={'Pickup'} />
        <Tab label={'Drop'} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ShowValetAllPickupTrips />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ShowValetAllDropTrips />
      </TabPanel>
    </>
  )
}
