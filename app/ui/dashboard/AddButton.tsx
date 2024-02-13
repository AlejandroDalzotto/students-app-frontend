import Link from 'next/link'

interface Props {
  nagivateTo: string;
  title: string;
  text?: string;
}

export default function AddButton({ nagivateTo, title, text = "Agregar" }: Props) {
  return (
    <Link
      aria-label={title}
      title={title}
      href={nagivateTo}
      className='flex gap-2 items-center justify-center py-3 px-5 rounded-lg text-xl font-medium fill-white bg-blue-500 text-white transition-all hover:bg-blue-700 active:shadow-inner active:scale-90'
    >
      <svg className='w-8 h-8'>
        <use xlinkHref='/sprites.svg#add'></use>
      </svg>
      {text}
    </Link>
  )
}
