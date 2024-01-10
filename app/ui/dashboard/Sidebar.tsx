"use client"

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import SidebarLink from '../Links/sidebar-link'
import MenuButton from '../buttons/menu-button'
import clsx from 'clsx'
import LogoutButton from '../buttons/logout-button'
import Link from 'next/link'

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

      <section className={
        clsx(
          'relative w-full h-full flex flex-col justify-between bg-white'
        )
      }>
        <div className='flex flex-col gap-y-3 h-full'>
          {NAVBAR_LINKS.map(({ id, label, route, icon_id: iconId }) => {
            return (
              <SidebarLink key={id + label + route} isSidebarOpen={isOpen} href={route} icon={iconId} isActive={pathname === route} text={label} />
            )
          })}
        </div>
        <div className='flex flex-col gap-y-3'>
          <Link
            href={"/settings"}
            className={
              clsx(
                "relative py-2 px-6 text-lg font-medium rounded-lg flex justify-start items-center gap-3 fill-black text-black transition-all hover:fill-blue-800 hover:bg-blue-100 hover:text-blue-800 active:scale-90",
                { "fill-blue-800 bg-blue-100 text-blue-800": pathname === "/settings" }
              )} title={`Ir a ${"Configuraciones".toLowerCase()}`}>

            <svg className="h-10 w-10">
              <use xlinkHref={"/sprites.svg#settings"}></use>
            </svg>

            {isOpen && <p>Configuraciones</p>}
          </Link>
          <LogoutButton isSidebarOpen={isOpen} />
        </div>
      </section>

    </aside>
  )
}
