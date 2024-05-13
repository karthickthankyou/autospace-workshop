import { ReactNode } from 'react'

export interface IBadgeProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'gray' | 'red' | 'yellow' | 'green'
}

export const Badge = ({
  children,
  size = 'md',
  variant = 'gray',
}: IBadgeProps) => {
  const sizeCls = {
    sm: 'px-2 text-xs',
    md: 'px-2 py-1.5 text-sm',
    lg: 'px-3 py-1.5',
  }
  const variantCls = {
    primary: 'bg-primary-100 border border-white text-primary-900',
    gray: 'bg-gray-100 border border-white text-gray-900',
    red: 'bg-red-100 border border-white text-red-900',
    yellow: 'bg-yellow-100 border border-white  text-yellow-900',
    green: 'bg-green-100 border border-white  text-green-900',
  }
  return (
    <span
      className={`transition-all  py-1 px-2 items-center shadow justify-center duration-300  rounded-full ${sizeCls[size]} ${variantCls[variant]}`}
    >
      {children}
    </span>
  )
}
