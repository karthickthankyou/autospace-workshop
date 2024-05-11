import { ReactNode } from 'react'

export type MapPanelTypes = {
  children?: ReactNode
  className?: string
  position?:
    | 'left-top'
    | 'left-center'
    | 'left-bottom'
    | 'center-bottom'
    | 'right-bottom'
    | 'right-center'
    | 'right-top'
    | 'center-top'
    | 'center-center'
}

export const Panel = ({ children, className, position }: MapPanelTypes) => {
  const classes = {
    'left-top': 'top-0 left-0 flex flex-col items-start',
    'left-center': 'top-1/2 -translate-y-1/2 left-0 flex flex-col items-start',
    'left-bottom': 'bottom-0 left-0 flex flex-col items-start',
    'center-bottom':
      'bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center',
    'right-bottom': 'bottom-0 right-0 flex flex-col items-end text-right',
    'right-center':
      'top-1/2 -translate-y-1/2 right-0 flex flex-col items-end text-right',
    'right-top': 'top-0 right-0 flex flex-col items-end text-right',
    'center-top':
      'top-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center',
    'center-center':
      'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center',
  }
  return (
    <div
      className={`absolute space-y-2 p-2 ${classes[position!]} ${className}`}
    >
      {children}
    </div>
  )
}
