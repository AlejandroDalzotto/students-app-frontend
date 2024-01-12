"use client";

import { logout } from "@/app/lib/actions";
import clsx from "clsx"

interface Props {
  isSidebarOpen: boolean;
}

export default function LogoutButton({ isSidebarOpen }: Props) {

  const onClick = () => {
    logout();
  };


  return (
    <button
      title="Cerrar sesión"
      onClick={onClick}
      className={clsx(
        "relative py-2 px-6 text-lg font-medium rounded-lg flex items-center gap-3 fill-black dark:fill-white dark:text-white transition-all active:scale-90 hover:fill-blue-800 hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-white/10",
        { "w-full": isSidebarOpen },
        { "w-fit": !isSidebarOpen },
      )}
    >
      <svg className='w-10 h-10'>
        <use xlinkHref="/sprites.svg#logout"></use>
      </svg>
      {isSidebarOpen ? "Cerrar sesión" : null}
    </button>
  )
}
