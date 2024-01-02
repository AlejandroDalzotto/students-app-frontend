import clsx from "clsx";
import Link from "next/link";
import type { Key } from "react";

interface Props {
  text: string;
  href: string;
  icon: string;
  key?: Key | null;
  isActive: boolean;
  isSidebarOpen: boolean;
}

export default function SidebarLink({ href, text, key, icon, isActive, isSidebarOpen }: Props) {
  return (
    <Link
      href={href}
      key={key}
      className={
        clsx(
          "relative flex items-center w-full gap-3 bg-black/10 fill-black text-black transition-all hover:fill-blue-800 hover:bg-blue-100 hover:text-blue-800",
          { "w-fit": !isSidebarOpen }
        )} title={`Ir a ${text.toLowerCase()}`}>
      <svg
        className="h-8 w-8"
      >
        <use xlinkHref={`/sprites.svg#${icon}`}></use>
      </svg>
      {isSidebarOpen ? text : null}
    </Link>
  )
}
