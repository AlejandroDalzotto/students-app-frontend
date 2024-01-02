import Image from 'next/image'
import IconLink from './ui/Links/link-with-icon'

export default function Page404() {
  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <div className='w-full flex flex-col gap-y-6 items-center'>
        <Image
          src={"/not-found-image.svg"}
          alt='Imagen para página no encontrada (404)'
          width={500}
          height={480}
          priority
        />
        <h2 className='text-5xl md:text-7xl text-center font-semibold md:font-extrabold'>Página no encontrada</h2>
        <p className='text-xl text-center [text-wrap:balance]'>Lo sentimos, no pudimos encontrar la página que estas buscando.</p>
        <IconLink icon='arrow-back' href="/" text='volver al inicio' />
      </div>
    </main>
  )
}
