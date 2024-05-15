import { ReactNode } from 'react'

export const TitleValue = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => (
  <div>
    <strong className="font-semibold">{title}</strong>{' '}
    <div className="text-sm">{children}</div>
  </div>
)

export const TitleStrongValue = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => (
  <div>
    <div className="text-sm text-gray">{title}</div>
    <div className="text-black">{children}</div>{' '}
  </div>
)
