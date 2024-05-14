import React, { InputHTMLAttributes } from 'react'

export const HtmlSelect = React.forwardRef<
  HTMLSelectElement,
  InputHTMLAttributes<HTMLSelectElement>
>(({ children, ...props }: InputHTMLAttributes<HTMLSelectElement>, ref) => (
  <select
    {...props}
    ref={ref}
    className="block w-full px-3 py-2 placeholder-gray-500 border border-gray-200 rounded shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
  >
    {children}
  </select>
))

HtmlSelect.displayName = 'HtmlSelect'
