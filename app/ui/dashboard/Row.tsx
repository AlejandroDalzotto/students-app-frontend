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
    <tr
      onClick={() => handleClick(data.dni)}
      key={data.name + data.dni + data.lastName}
      className={clsx("w-full dark:text-neutral-300 border-b dark:border-neutral-700 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg transition-colors hover:text-blue-800 dark:hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-white/5 cursor-pointer",
        { "text-blue-800 dark:text-blue-500 bg-blue-100 dark:bg-white/5": isSelected })}
    >
      <td className="whitespace-nowrap text-lg text-center px-3 py-3">
        {data.name}, {data.lastName}
      </td>
      <td className="whitespace-nowrap text-lg text-center px-3 py-3">
        {formatDateString(data.birth)}
      </td>
      <td className="whitespace-nowrap text-lg text-center px-3 py-3">
        {data.address}
      </td>
      <td className="whitespace-nowrap text-lg text-center px-3 py-3">
        {data.dni.toLocaleString()}
      </td>
      <td className={clsx(
        "whitespace-nowrap text-lg text-center px-3 py-3 capitalize",
        {
          "text-green-600 dark:text-green-400": hasLegajo === "completo"
        },
        {
          "text-red-600 dark:text-red-400": hasLegajo === "incompleto"
        }
      )}>
        {hasLegajo}
      </td>
    </tr>
  )
}
