import { ReactNode } from 'react'

export interface IContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: IContainerProps) => (
  <div className={`container sm:px-2 mx-auto ${className}`}>{children}</div>
)
