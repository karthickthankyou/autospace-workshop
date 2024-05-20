import { MenuItem } from '@autospace/util/types'
import Link from 'next/link'

export interface IMenuItemProps {
  menuItems: MenuItem[]
}

export const Menus = ({ menuItems }: IMenuItemProps) => {
  return (
    <>
      {menuItems.map(({ label, href }) => (
        <Link
          className="hover:underline underline-offset-8 transition-all "
          key={label}
          href={href}
        >
          {label}
        </Link>
      ))}
    </>
  )
}
