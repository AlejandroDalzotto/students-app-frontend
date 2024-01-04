import clsx from "clsx"

interface Props {
  isSidebarOpen: boolean;
  action: () => void;
}

export default function LogoutButton({ isSidebarOpen, action }: Props) {
  return (
    <button
      title="Cerrar sesión"
      onClick={action}
      className={clsx(
        "relative py-2 px-6 text-lg font-medium rounded-lg flex items-center gap-3 fill-black text-black transition-all hover:fill-blue-800 hover:bg-blue-100 hover:text-blue-800",
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
