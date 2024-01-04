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

    params.set("page", '1')

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="relative h-full w-full max-w-md">
      <input type="text" placeholder="Ingresa nombre y/o apellido"
        id="search-bar"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        autoComplete="off"
        className="peer h-full w-full text-xl text-neutral-950 border-b border-gray-200 bg-transparent pt-4 pb-1.5 font-normal outline outline-0 transition-all placeholder-shown:border-gray-300 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
      <label
        htmlFor="search-bar"
        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-xl peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-700 peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
        Buscar alumno ...
      </label>
    </div>
  )
}
