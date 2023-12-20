import React from 'react'
import IconLink from './ui/Links/link-with-icon'

export default function Page404() {
  return (
    <main className='w-full h-screen flex justify-center'>
      <div className='w-full flex flex-col gap-y-6 items-center mt-40'>
        <p className='text-4xl font-bold text-blue-500'>404</p>
        <h2 className='text-7xl text-center font-extrabold'>Página no encontrada</h2>
        <p className='text-xl'>Lo sentimos, no pudimos encontrar la página que estas buscando.</p>
        <IconLink icon='arrow-back'  href="/" text='volver al inicio' color='gray' />
      </div>
    </main>
  )
}
