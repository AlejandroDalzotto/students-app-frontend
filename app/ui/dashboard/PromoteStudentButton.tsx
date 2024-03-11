"use client";

import { useModalStore } from "@/stores";
import clsx from "clsx"
import { useSearchParams } from "next/navigation"

export default function PromoteStudentButton() {

  const searchParams = useSearchParams()
  const selected = Boolean(searchParams.get("sid"))
  const { openModal } = useModalStore()

  return (
    <button
      onClick={() => openModal("promote-student")}
      aria-label="Promover alumno a curso nuevo"
      title="Promover alumno a curso nuevo"
      aria-disabled={!selected}
      disabled={!selected}
      className={clsx(
        "flex items-center justify-center p-3 rounded-lg transition-all active:shadow-inner active:scale-90",
        { "fill-white bg-teal-500 hover:bg-teal-700": selected },
        { "pointer-events-none bg-neutral-300 fill-neutral-600 dark:bg-neutral-800": !selected },
      )}
    >
      <svg className='w-8 h-8'>
        <use xlinkHref='/sprites.svg#star'></use>
      </svg>
    </button>
  )
}
