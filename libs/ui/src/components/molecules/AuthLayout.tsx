'use client'
import { CarScene } from '@autospace/3d/src/scenes/CarScene'
import { RotatingCamera } from '@autospace/3d/src/components/camera/Rotating'
import { IconArrowBack } from '@tabler/icons-react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { BrandIcon } from '../atoms/BrandIcon'

export interface IAuthLayoutProps {
  children: ReactNode
  title: string
}

export const AuthLayout = ({ title, children }: IAuthLayoutProps) => {
  return (
    <div className="flex gap-2 justify-center h-[calc(100vh-4rem)] overflow-hidden  p-2 ">
      <div
        className=" -skew-y-3 origin-top-right min-w-96 flex flex-col justify-center items-center   "
        style={{
          background:
            'linear-gradient(to top right, hsl(0, 0%, 6%), hsl(52, 0%, 10%))',
        }}
      >
        <div className="p-4 text-white">
          <div className="w-full max-w-lg mx-auto ">
            <h1 className="flex items-center gap-2 mb-2 text-2xl">
              <BrandIcon /> <div>{title}</div>
            </h1>
            {children}
            <div className="mt-4 text-sm text-gray-300">
              <Link href="/" className="flex items-center gap-2">
                <IconArrowBack className="w-4 h-4" /> Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative  flex-grow  bg-white">
        <CarScene
          orbitControls={false}
          camera={<RotatingCamera />}
          hideAllComments
        />
      </div>
    </div>
  )
}
