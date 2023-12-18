interface Props {
  icon: string,
  text?: string | number
  title: string
}

export function StudentDataWithCheck({ text, icon, title }: Props) {
  return (
    <div title={title} className="w-full text-start text-xl fill-black flex items-center gap-5">
      <p className="whitespace-nowrap font-semibold">{text?.toString() ?? "--"}</p>{" "}
      <svg role="img" className='w-8 h-8'>
        <use xlinkHref={`/sprites.svg#${icon}`}></use>
      </svg>
    </div>
  )
}

export default function StudentData({ icon, text, title }: Props) {
  return (
    <div title={title} className="w-full text-start text-xl fill-black flex items-center gap-5">
      <svg role="img" className='w-8 h-8'>
        <use xlinkHref={`/sprites.svg#${icon}`}></use>
      </svg>
      <p className="whitespace-nowrap">{text?.toString() ?? "--"}</p>
    </div>
  )
}
