import clsx from "clsx";
import Link from "next/link";

interface Props {
  text: string;
  href: string;
  icon: string;
  isActive: boolean;
  isSidebarOpen: boolean;
}

export default function SidebarLink({ href, text, icon, isActive, isSidebarOpen }: Props) {
  return (
    <Link
      href={href}
      className={
        clsx(
          "relative py-2 px-6 text-lg font-medium rounded-lg flex justify-start items-center gap-3 fill-black text-black transition-all hover:fill-blue-800 hover:bg-blue-100 hover:text-blue-800 active:scale-90",
          { "w-full": isSidebarOpen },
          { "w-fit": !isSidebarOpen },
          { "fill-blue-800 bg-blue-100 text-blue-800": isActive }
        )} title={`Ir a ${text.toLowerCase()}`}>

      <svg className="h-10 w-10">
        <use xlinkHref={`/sprites.svg#${icon}`}></use>
      </svg>

      <p>
        {isSidebarOpen ? text : null}
      </p>
    </Link>
  )
}
