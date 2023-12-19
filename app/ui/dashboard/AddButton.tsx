import Link from 'next/link'
import React from 'react'

interface Props {
  nagivateTo: string
}

export default function AddButton({ nagivateTo }: Props) {
  return (
    <Link
      href={nagivateTo}
      className='flex gap-2 items-center justify-center py-3 px-5 rounded-lg text-xl font-medium fill-white bg-blue-500 text-white transition-all hover:bg-blue-700 active:shadow-inner active:scale-95'
    >
      <svg className='w-8 h-8'>
        <use xlinkHref='/sprites.svg#add'></use>
      </svg>
      Agregar
    </Link>
  )
}
