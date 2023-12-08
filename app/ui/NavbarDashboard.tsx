import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

export default function NavbarDashboard() {
  return (
    <aside className='min-h-full w-80 flex flex-col'>
      <header className='relative h-1/4 w-full bg-blue-500 grid place-content-center p-5 rounded-lg'>
        <Image
          src="/logo-app.svg"
          alt="Logo de la aplicación"
          width={2000}
          height={1247}
          className='w-full h-auto'
        />
      </header>

      <ul className='relative mt-3 flex flex-col gap-y-3 w-full h-full'>

        {NAVBAR_LINKS.map(({ id, label, route, icon_id: iconId }) => {
          return (
            <li key={id}>
              <Link
                className='flex bg-black/5 items-center gap-x-4 py-3 px-4 rounded-lg w-full transition-colors hover:bg-blue-100 hover:fill-blue-500 hover:text-blue-500'
                href={route}
              >
                <svg role="img" className='w-8 h-8'>
                  <use xlinkHref={`/sprites.svg#${iconId}`}></use>
                </svg>
                <p className='text-lg -mb-1 font-medium'>{label}</p>
              </Link>
            </li>
          )
        })}

      </ul>

      <footer className='mt-3 rounded-lg gap-5 flex items-center justify-between h-auto w-full relative'>
        <button
          className='flex bg-black/5 items-center gap-x-4 py-3 px-4 rounded-lg w-full transition-colors hover:bg-blue-100 hover:fill-blue-500 hover:text-blue-500'
        >
          <svg role="img" className='w-8 h-8'>
            <use xlinkHref="/sprites.svg#logout"></use>
          </svg>
          <p className='text-lg -mb-1 font-medium'>Cerrar sesión</p>
        </button>
        <Link href="/user-profile" className='flex bg-blue-500 fill-white items-center gap-x-4 py-3 px-4 rounded-lg w-fit transition-colors hover:bg-blue-100 hover:fill-blue-500 hover:text-blue-500'>
          <svg role="img" className='w-8 h-8'>
            <use xlinkHref="/sprites.svg#user"></use>
          </svg>
        </Link>
      </footer>
    </aside>
  )
}
