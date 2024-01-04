import clsx from "clsx";
import Link from "next/link";

interface Props {
  nagivateTo: string;
  active: boolean;
}

export default function EditButtom({ nagivateTo, active }: Props) {
  return (
    <Link
      aria-disabled={!active}
      href={nagivateTo}
      className={clsx(
        "flex items-center justify-center p-3 rounded-lg transition-all active:shadow-inner active:scale-90",
        { "fill-white bg-sky-500 hover:bg-sky-700": active },
        { "pointer-events-none bg-neutral-300 fill-neutral-600": !active },
      )}
    >
      <svg className='w-8 h-8'>
        <use xlinkHref='/sprites.svg#edit'></use>
      </svg>
    </Link>
  )
}
