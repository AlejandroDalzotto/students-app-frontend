"use client"

import { RowData } from "@/app/lib/definitions"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { type Key } from "react"

interface Props {
  key?: Key | null | undefined
  data: RowData
}

export default function Row({ data }: Props) {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const params = new URLSearchParams(searchParams)

  const handleClick = (id: string | number) => {

    params.set("sid", id.toString())

    replace(`${pathname}?${params.toString()}`)
  }

  const isSelected = Number(params.get("sid")) === data.id_student

  return (
    <tr
      onClick={() => handleClick(data.id_student)}
      key={data.id_student}
      className={`w-full border-b py-3 text-sm last-of-type:border-none 
      [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg 
      [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg
      transition-colors hover:text-blue-500 hover:bg-blue-200 cursor-pointer
      ${isSelected ? "text-blue-500 bg-blue-200" : ""}
      `}
    >
      <td className="whitespace-nowrap text-lg text-center px-3 py-3">
        {data.id_student}
      </td>
      <td className="whitespace-nowrap text-lg text-center px-3 py-3">
        {data.name}, {data.lastName}
      </td>
      <td className="whitespace-nowrap text-lg text-center px-3 py-3">
        {new Date(data.birth).toLocaleDateString()}
      </td>
      <td className="whitespace-nowrap text-lg text-center px-3 py-3">
        {data.address}
      </td>
      <td className="whitespace-nowrap text-lg text-center px-3 py-3">
        {data.dni}
      </td>
      <td className="whitespace-nowrap  text-lg text-center px-3 py-3">
        {data.legajo}
      </td>
    </tr>
  )
}
