import { IconArrowRightCircle } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

import {
  differenceInTime,
  formatDate,
  formatTime,
  getTimeUnits,
} from '@autospace/util/date'

export interface IDateRangeBookingInfoProps {
  startTime?: string
  endTime?: string
}

export const DateRangeBookingInfo = ({
  startTime,
  endTime,
}: IDateRangeBookingInfoProps) => {
  const [duration, setDuration] = useState<string | null>(null)

  useEffect(() => {
    if (!startTime || !endTime) return
    const differenceInMilliseconds = differenceInTime({
      startTime,
      endTime,
    })

    if (differenceInMilliseconds < 0) {
      setDuration('Invalid date range')
      return
    }

    setDuration(getTimeUnits(differenceInMilliseconds).timeString)
  }, [startTime, endTime])

  if (!startTime || !endTime) return null

  return (
    <>
      <div className="flex items-center justify-between gap-2 my-4">
        <div>
          <div className="text-lg font-bold">{formatTime(startTime)}</div>
          <div className="text-xs text-gray-600">{formatDate(startTime)}</div>
        </div>
        <div className="flex flex-col items-center justify-end">
          <IconArrowRightCircle />
          <div className="-mt-1 text-xs text-center text-gray-600">
            {duration ? duration : 'Select date'}
          </div>
        </div>
        <div className="text-right">
          <div>
            <div className="text-lg font-bold">{formatTime(endTime)}</div>
            <div className="text-xs text-gray-600">{formatDate(endTime)}</div>
          </div>
        </div>
      </div>
    </>
  )
}
