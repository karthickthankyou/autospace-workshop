import { differenceInTime, getTimeUnits } from '@autospace/util/date'
import { IconArrowRightRhombus } from '@tabler/icons-react'
import { format } from 'date-fns'

export interface IDateCardProps {
  startTime: string
  endTime: string
}

export const StartEndDateCard = ({ startTime, endTime }: IDateCardProps) => {
  const numOfHours = getTimeUnits(
    differenceInTime({ startTime, endTime, unit: 'seconds' }),
  ).timeString
  return (
    <div className="flex items-center justify-between gap-2 p-2">
      <DateCard dateTime={startTime} />
      <div className="flex flex-col items-center">
        <IconArrowRightRhombus />
        <div className="text-xs">{numOfHours}</div>
      </div>
      <DateCard dateTime={endTime} justify="right" />
    </div>
  )
}

export const DateCard = ({
  dateTime,
  justify = 'left',
}: {
  dateTime: string
  justify?: 'left' | 'right'
}) => {
  const [date, time] = [
    format(new Date(dateTime), 'dd MMMM yyyy'),
    format(new Date(dateTime), 'HH:mm'),
  ]

  return (
    <div
      className={`flex flex-col  ${
        justify === 'left' ? 'items-start' : 'items-end'
      }`}
    >
      <div className="text-xl">{time}</div>
      <div className="text-xs text-gray-500">{date}</div>
    </div>
  )
}
