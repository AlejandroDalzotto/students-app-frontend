"use client"

import { deleteStudent } from "@/app/lib/actions/student.actions";
import clsx from "clsx";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function DeleteButton() {

  const searchParams = useSearchParams()
  const selected = Boolean(searchParams.get("sid"))
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  const dni = searchParams.get("sid") ?? 0

  return (
    <button
      onClick={() => {
        deleteStudent(dni)
        params.delete("sid")
        replace(`${pathname}?${params.toString()}`)
      }}
      aria-label="Borrar información del alumno"
      title="Borrar información del alumno"
      aria-disabled={!selected}
      disabled={!selected}
      className={clsx(
        "flex items-center justify-center p-3 rounded-lg transition-all active:shadow-inner active:scale-90",
        { "fill-white bg-red-500 hover:bg-red-700": selected },
        { "pointer-events-none bg-neutral-300 fill-neutral-600 dark:bg-neutral-800": !selected },
      )}
    >
      <svg className='w-8 h-8'>
        <use xlinkHref='/sprites.svg#delete'></use>
      </svg>
    </button>
  )
}
