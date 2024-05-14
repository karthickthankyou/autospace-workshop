import { IconRotateClockwise2 } from '@tabler/icons-react'

type ButtonSizes = 'none' | 'sm' | 'md' | 'lg' | 'xl'

export type IButtonProps = {
  size?: ButtonSizes
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'success' | 'error' | 'white' | 'black'
  fullWidth?: boolean
  loading?: boolean
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const variantColor = {
  contained: {
    primary:
      'text-black bg-primary border-2 border-primary enabled:hover:bg-primary-600',
    white: 'text-black bg-white',
    black: 'text-primary bg-black enabled:hover:bg-gray-900',
    success: 'text-white bg-green enabled:hover:bg-green-700',
    error: 'text-white bg-red enabled:hover:bg-red-700',
  },

  outlined: {
    primary: 'border-2 border-primary text-black enabled:hover:bg-black/10',
    white: 'border-2 border-white text-white enabled:hover:bg-white/10',
    black: 'border-2 border-black text-black enabled:hover:bg-black/10',
    success: 'border-2 border-green text-green enabled:hover:bg-green-100',
    error: 'border-2 border-red text-red enabled:hover:bg-red-100',
  },
  text: {
    primary: 'text-primary-900 ',
    white: 'text-white',
    black: 'text-black',
    success: 'text-green ',
    error: 'text-red ',
  },
}

const sizes: { [key in ButtonSizes]: string } = {
  none: 'text-xs',
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2 text-base',
  xl: 'px-8 py-3 text-xl',
}

export const Button = ({
  size = 'md',
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  children,
  className,
  loading = false,
  type = 'button',
  ...props
}: IButtonProps) => {
  const variantCls = variantColor[variant][color]
  //   variant === 'text' ? sizes.none :
  const sizeCls = sizes[size]

  const fwCls = fullWidth && 'w-full'
  const disCls = (disabled || loading) && 'opacity-60 cursor-auto'

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`rounded relative font-medium ${sizeCls} ${fwCls} ${variantCls} ${disCls}  ${className} `}
      {...props}
    >
      {loading ? (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <IconRotateClockwise2 className="w-5 h-5 animate-spin" />
          </div>
          <div className="opacity-10">{children}</div>
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  )
}
