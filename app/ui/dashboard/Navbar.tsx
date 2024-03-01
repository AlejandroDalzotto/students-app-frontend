"use client"

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import SidebarLink from '../Links/sidebar-link'
import MenuButton from '../buttons/menu-button'
import clsx from 'clsx'
import LogoutButton from '../buttons/logout-button'
import Link from 'next/link'
import { useUIStore } from '@/stores'

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
  // {
  //   id: 3,
  //   label: "Asistencias",
  //   route: "/dashboard/assists",
  //   icon_id: "assists"
  // },
  {
    id: 4,
    label: "Examenes",
    route: "/dashboard/exams",
    icon_id: "description"
  },
  {
    id: 5,
    label: "Cursos",
    route: "/dashboard/courses",
    icon_id: "module"
  },
  {
    id: 6,
    label: "Materias",
    route: "/dashboard/subjects",
    icon_id: "subject"
  }
]

export default function Navbar() {

  const { isSideMenuOpen, toggle } = useUIStore()
  const pathname = usePathname()

  return (
    <>
      <header className='w-full py-2 row-span-1 h-full px-6 bg-neutral-200 dark:bg-neutral-800 flex gap-x-5 items-center'>
        <MenuButton toggle={toggle} />
        <h1 className='text-2xl'>Varano</h1>
      </header>
      <div
        onClick={() => toggle()}
        className={clsx(
          'bg-black/50 backdrop-blur h-screen absolute z-10 top-0',
          { "left-0 w-screen": isSideMenuOpen },
          { "-left-96 w-[100px]": !isSideMenuOpen }
        )}></div>
      <aside className={clsx(
        "min-h-full bg-black/20 w-80 p-4 flex flex-col transition-all gap-y-2 absolute z-20",
        { "left-0": isSideMenuOpen },
        { "-left-96": !isSideMenuOpen },
      )}>
        <header className={clsx(
          'relative h-36 w-full px-2 rounded-lg bg-blue-500 flex items-center justify-center'
        )}>
          <Image
            title='Varano'
            src="/logo-app.svg"
            alt="Logo de la aplicación"
            width={250}
            height={156}
            className={clsx(
              "w-auto h-28"
            )}
          />

        </header>

        {/* Links */}
        <section className={
          clsx(
            'relative w-full h-full flex flex-col flex-grow justify-between'
          )
        }>
          <div className='flex flex-col gap-y-3 h-full'>
            {NAVBAR_LINKS.map(({ id, label, route, icon_id: iconId }) => {
              return (
                <SidebarLink onClick={() => toggle()} key={id + label + route} isSidebarOpen={isSideMenuOpen} href={route} icon={iconId} isActive={pathname === route} text={label} />
              )
            })}
          </div>
          <div className='flex flex-col gap-y-3'>
            <Link
              onClick={() => toggle()}
              href={"/dashboard/settings"}
              className={
                clsx(
                  "relative py-2 px-6 text-lg font-medium rounded-lg flex items-center gap-3 fill-black dark:fill-white dark:text-white transition-all active:scale-90 hover:fill-blue-800 hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-white/10",
                  { "fill-blue-800 dark:fill-blue-500 bg-blue-100 dark:bg-white/5 text-blue-800 dark:text-blue-500": pathname === "/dashboard/settings" }
                )} title={"Ir a configuraciones"}>

              <svg className="h-10 w-10">
                <use xlinkHref={"/sprites.svg#settings"}></use>
              </svg>

              {isSideMenuOpen && <p>Configuraciones</p>}
            </Link>
            <LogoutButton isSidebarOpen={isSideMenuOpen} />
          </div>
        </section>
      </aside>
    </>
  )
}
