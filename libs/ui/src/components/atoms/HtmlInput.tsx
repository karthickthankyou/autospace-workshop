import React, { InputHTMLAttributes } from 'react'

export type HtmlInputProps = InputHTMLAttributes<HTMLInputElement>

export const HtmlInput = React.forwardRef<HTMLInputElement, HtmlInputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={`block w-full px-3 py-2 border rounded appearance-none placeholder-gray read-only:text-gray-600 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm ${className}`}
      {...props}
    />
  ),
)
HtmlInput.displayName = 'Input'
