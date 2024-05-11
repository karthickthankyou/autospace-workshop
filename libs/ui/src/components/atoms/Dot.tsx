import { BaseComponent } from '@autospace/util/types'

export const PulsingDot = ({ children }: BaseComponent) => {
  if (children)
    return (
      <div className="absolute top-0 px-2 bg-primary-500 rounded-full left-full animate-pulse">
        {children}
      </div>
    )
  return (
    <div className="absolute top-0 left-full animate-pulse">
      <div className="w-2 h-2 rounded-full bg-primary-500" />
    </div>
  )
}
