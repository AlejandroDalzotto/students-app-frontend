import clsx from "clsx";
import Link from "next/link";

interface Props {
  text: string;
  href: string;
  icon: string;
  isActive: boolean;
  isSidebarOpen: boolean;
  onClick?: () => void;
}

export default function SidebarLink({ href, text, icon, isActive, isSidebarOpen, onClick }: Props) {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={
        clsx(
          "relative whitespace-nowrap py-2 px-6 text-lg font-medium rounded-lg flex items-center gap-3 fill-black dark:fill-white dark:text-white transition-all active:scale-90 hover:fill-blue-800 hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-white/10",
          { "w-full": isSidebarOpen },
          { "w-fit": !isSidebarOpen },
          { "fill-blue-800 dark:fill-blue-500 bg-blue-100 dark:bg-white/5 text-blue-800 dark:text-blue-500": isActive }
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
