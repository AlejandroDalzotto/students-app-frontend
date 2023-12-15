"use client"

import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

export default function SearchBar() {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <input
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get("query")?.toString()}
      className="w-full max-w-md text-lg py-3 px-6 placeholder:text-neutral-500 bg-neutral-200 rounded-lg leading-5 outline-none"
      type="text"
      placeholder="Buscar alumno..."
    />
  )
}
