import Link from 'next/link'
import React from 'react'

export default function Page404() {
  return (
    <main className='w-full h-screen flex justify-center'>
      <div className='w-full flex flex-col gap-y-6 items-center mt-40'>
        <p className='text-4xl font-bold text-blue-500'>404</p>
        <h2 className='text-7xl text-center font-extrabold'>Página no encontrada</h2>
        <p className='text-xl'>Lo sentimos, no pudimos encontrar la página que estas buscando.</p>
        <Link href="/" className='flex gap-x-2 items-center justify-center rounded-lg text-lg py-3 px-6 transition-colors hover:bg-black/10'>
          <svg role="img" className='w-5 h-5'>
            <use xlinkHref="/sprites.svg#arrow-back"></use>
          </svg>
          <p>Volver al inicio</p>
        </Link>
      </div>
    </main>
  )
}
