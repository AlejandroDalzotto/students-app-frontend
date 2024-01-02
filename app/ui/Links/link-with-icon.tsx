import Link from "next/link";
import { type Key } from "react";

interface Props {
  href: string;
  icon: string;
  key?: Key | null;
  text: string;
}

export default function IconLink({ href, icon, key, text }: Props) {
  return (
    <Link href={href} key={key} className="flex items-center gap-3 py-2 px-4 rounded shadow shadow-black/40 fill-black text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <use xlinkHref={`/sprites.svg#${icon}`}></use>
      </svg>
      {text}
    </Link>
  )
}
