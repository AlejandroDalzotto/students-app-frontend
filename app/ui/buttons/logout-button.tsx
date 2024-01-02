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
        "flex items-center bg-black/10 gap-3 fill-black text-black transition-all hover:fill-blue-800 hover:bg-blue-100 hover:text-blue-800",
        {
          "w-fit": !isSidebarOpen
        }
      )}
    >
      <svg role="img" className='w-8 h-8'>
        <use xlinkHref="/sprites.svg#logout"></use>
      </svg>
      {isSidebarOpen ? "Cerrar sesión" : null}
    </button>
  )
}
