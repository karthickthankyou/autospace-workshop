'use client'
import { AddValet } from '../organisms/AddValet'
import { ListValets } from '../organisms/ListValets'

export const ManageValets = () => {
  return (
    <div>
      <div className="flex justify-end">
        <AddValet />
      </div>
      <ListValets />
    </div>
  )
}
