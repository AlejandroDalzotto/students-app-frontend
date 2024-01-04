interface Props {
  toggle: () => void
}

export default function MenuButton({ toggle }: Props) {
  return (
    <button onClick={toggle} className="flex items-center justify-center shadow-none fill-white bg-transparent">
      <svg className="w-10 h-10">
        <use xlinkHref="/sprites.svg#bars"></use>
      </svg>
    </button>
  )
}
