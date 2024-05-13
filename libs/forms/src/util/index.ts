export const isStartTimeValid = (startTime: string) => {
  const startDate = new Date(startTime)
  const currentDate = new Date()
  return startDate > currentDate
}

export const isEndTimeValid = ({
  endTime,
  startTime,
}: {
  startTime: string
  endTime: string
}) => {
  const startDate = new Date(startTime)
  const endDate = new Date(endTime)
  return endDate > startDate
}
