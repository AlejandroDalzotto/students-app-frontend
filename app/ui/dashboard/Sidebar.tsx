"use client"

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import SidebarLink from '../Links/sidebar-link'
import MenuButton from '../buttons/menu-button'
import clsx from 'clsx'
import LogoutButton from '../buttons/logout-button'

const NAVBAR_LINKS = [
  {
    id: 1,
    label: "Inicio",
    route: "/dashboard",
    icon_id: "home"
  },
  {
    id: 2,
    label: "Alumnos",
    route: "/dashboard/students",
    icon_id: "list"
  },
  {
    id: 3,
    label: "Asistencias",
    route: "/dashboard/assists",
    icon_id: "assists"
  },
  {
    id: 4,
    label: "Examenes finales",
    route: "/dashboard/final-exams",
    icon_id: "description"
  }
]

export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname()

  return (
    <aside style={{ width: isOpen ? '20rem' : '6rem' }} className={clsx(
      "min-h-full flex flex-col transition-all gap-y-2 relative",
    )}>
      <header className={clsx(
        'relative h-36 w-full px-6 rounded-lg bg-blue-500 flex items-center justify-between'
      )}>
        <MenuButton toggle={() => setIsOpen(!isOpen)} />
        <Image
          src="/logo-app.svg"
          alt="Logo de la aplicación"
          width={250}
          height={156}
          className={clsx(
            "w-auto h-28",
            {
              "hidden": !isOpen
            }
          )}
          priority={true}
        />
      </header>

      <ul className={
        clsx(
          'relative w-full h-full flex flex-col justify-between bg-white'
        )
      }>
        <div className='flex flex-col gap-y-3 h-full'>
          {NAVBAR_LINKS.map(({ id, label, route, icon_id: iconId }) => {
            return (
              <li key={id} className={clsx({ "w-fit": !isOpen }, { "w-full": isOpen })}>
                <SidebarLink isSidebarOpen={isOpen} href={route} icon={iconId} isActive={pathname === route} text={label} />
              </li>
            )
          })}
        </div>
        <div className='flex flex-col gap-y-3'>
          <SidebarLink href="/settings" icon='settings' isActive={pathname === "/settings"} isSidebarOpen={isOpen} text='Configuraciones' />
          <LogoutButton action={() => console.log("logout")} isSidebarOpen={isOpen} />
        </div>
      </ul>

    </aside>
  )
}
