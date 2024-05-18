'use client'
import { CarScene } from '@autospace/3d/src/scenes/CarScene'

export default function Home() {
  return (
    <main className="h-[calc(100vh-4rem)] ">
      <div className="absolute top-16 bottom-0 left-0 right-0">
        <CarScene />
      </div>
    </main>
  )
}
