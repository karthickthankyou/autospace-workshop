import { ReactNode } from 'react'

export const CostTitleValue = ({
  title,
  price,
}: {
  title: string
  price: ReactNode
}) => {
  if (!price) return null
  return (
    <div className="flex justify-between text-lg font-bold">
      <div>{title}</div>
      <div>${price}</div>
    </div>
  )
}
