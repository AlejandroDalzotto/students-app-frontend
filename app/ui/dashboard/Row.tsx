"use client"

import { RowData } from "@/app/lib/definitions"
import { formatDateString } from "@/app/lib/utils"
import clsx from "clsx"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

interface Props {
  data: RowData
}

export default function Row({ data }: Props) {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const params = new URLSearchParams(searchParams)

  const handleClick = (dni: string | number) => {

    params.set("sid", dni.toString())

    replace(`${pathname}?${params.toString()}`)
  }

  const isSelected = params.get("sid") === data.dni.toString()

  const hasLegajo = data.legajo ? "completo" : "incompleto"

  return (
    <div
      onClick={() => handleClick(data.dni)}
      key={data.name + data.dni + data.lastName}
      className={clsx("cursor-pointer grid grid-cols-12 items-center py-2 px-12 w-full border bg-black/5 dark:bg-transparent dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg",
        { "text-blue-800 dark:text-blue-500 bg-blue-100 dark:bg-white/5": isSelected })}
    >
      <p className="col-span-3">
        {data.name}, {data.lastName}
      </p>
      <p className="col-span-2">
        {data.dni.toLocaleString()}
      </p>
      <p className="col-span-2">
        {data.address}
      </p>
      <p className="col-span-2">
        {formatDateString(data.birth)}
      </p>
      <p className="col-span-2">
        {data.matricula}
      </p>
      <p className={clsx(
        "capitalize col-span-1",
        {
          "text-green-600 dark:text-green-400": hasLegajo === "completo"
        },
        {
          "text-red-600 dark:text-red-400": hasLegajo === "incompleto"
        }
      )}>
        {hasLegajo}
      </p>
    </div>
  )
}
