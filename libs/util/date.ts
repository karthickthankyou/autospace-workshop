import { format } from 'date-fns'
import pluralize from 'pluralize'

export const toLocalISOString = (date: Date): string => {
  const tzoffset = date.getTimezoneOffset() * 60000 // offset in milliseconds
  const localISOTime = new Date(date.getTime() - tzoffset).toISOString()

  return localISOTime
}

export const formatDate = (date: string) => {
  const dateObj = new Date(date)
  return format(dateObj, 'dd MMM yy')
}

export const formatTime = (date: string) => {
  const dateObj = new Date(date)
  return format(dateObj, 'HH:mm')
}

export const differenceInTime = ({
  startTime,
  endTime,
  unit = 'milliseconds',
}: {
  startTime: string
  endTime: string
  unit?: 'milliseconds' | 'seconds' | 'minutes' | 'hours'
}) => {
  const diffInMs = new Date(endTime).getTime() - new Date(startTime).getTime()
  switch (unit) {
    case 'milliseconds':
      return diffInMs
    case 'seconds':
      return diffInMs / 1000
    case 'minutes':
      return diffInMs / 1000 / 60
    case 'hours':
      return diffInMs / 1000 / 60 / 60
    default:
      throw new Error(`Invalid time unit: ${unit}`)
  }
}

export const getTimeUnits = (timeInSeconds: number) => {
  let timeString = ''

  timeInSeconds = timeInSeconds / 1000

  const days = Math.floor(timeInSeconds / 86400)
  timeInSeconds -= days * 86400
  if (days > 0) {
    timeString += `${days} ${pluralize('day', days)}`
  }

  const hours = Math.floor(timeInSeconds / 3600)
  timeInSeconds -= hours * 3600
  if (hours > 0) {
    if (timeString.length > 0) {
      timeString += ' '
    }
    timeString += `${hours} ${pluralize('hour', hours)}`
  }

  const minutes = Math.floor(timeInSeconds / 60)
  timeInSeconds -= minutes * 60
  if (minutes > 0) {
    if (timeString.length > 0) {
      timeString += ' '
    }
    timeString += `${minutes} ${pluralize('minute', minutes)}`
  }

  return {
    days,
    hours,
    minutes,
    timeString,
  }
}
