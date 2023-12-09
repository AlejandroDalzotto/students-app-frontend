"use client"

import { type Student } from "@/app/lib/definitions"
import { useState } from "react"

export default function ListOfStudents({ students }: { students: Student[] }) {

  const [searchValue, setSearchValue] = useState("")

  const searchFilter = (list: Student[]) => {
    return list.filter(({ name, lastname }) => `${name}, ${lastname}`.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const filteredStudents = searchFilter(students)

  return (
    <div className="w-full relative flex flex-col gap-y-10">
      <div className="max-w-md relative flex gap-x-4">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full py-3 px-6 placeholder:text-neutral-500 bg-neutral-200 rounded-lg leading-5 outline-none"
          type="text"
          placeholder="Buscar alumno..."
        />
      </div>

      {/* Students list */}
      <section className="w-full p-2 rounded-lg max-w-5xl relative min-h-[500px] max-h-[512px]">
        <header className="overflow-y-auto"  style={{ scrollbarGutter: "stable" }}>
          <div className="flex">
            <h3 className="w-full font-medium text-lg grid place-content-center max-w-[10%]">Código</h3>
            <h3 className="w-full font-medium text-lg grid place-content-center p-4 text-center max-w-[15%]">Nombre y Apellido</h3>
            <h3 className="w-full font-medium text-lg grid place-content-center p-4 text-center max-w-[15%]">Fec. de Nacimiento</h3>
            <h3 className="w-full font-medium text-lg grid place-content-center p-4 text-center max-w-[10%]">Sexo</h3>
            <h3 className="w-full font-medium text-lg grid place-content-center p-4 text-center max-w-[20%]">Dirección</h3>
            <h3 className="w-full font-medium text-lg grid place-content-center p-4 text-center max-w-[20%]">DNI</h3>
            <h3 className="w-full font-medium text-lg grid place-content-center p-4 text-center max-w-[10%]">Legajo</h3>
          </div>
        </header>
        <section className="relative w-full overflow-auto max-h-96" style={{ scrollbarGutter: "stable" }}>
          {filteredStudents.map(({ code, name, lastname, birthdate, gender, address, dni, legajo }, index) => {
            return (
              <article key={code} className={`rounded flex items-center max-h-20 ${index % 2 == 0 ? "bg-black/10" : "bg-black/5"}`}>
                <p className="text-lg text-center w-[10%]">{code}</p>
                <p className="w-full text-lg p-4 text-center max-w-[15%]">{name}, {lastname}</p>
                <p className="w-full text-lg p-4 text-center max-w-[15%]">{birthdate}</p>
                <p className="w-full text-lg p-4 text-center max-w-[10%]">{gender}</p>
                <p className="w-full text-lg p-4 text-center max-w-[20%]">{address}</p>
                <p className="w-full text-lg p-4 text-center max-w-[20%]">{dni}</p>
                <p className="w-full text-lg p-4 text-center max-w-[10%]">{legajo}</p>
              </article>
            )
          })}
        </section>
      </section>
    </div>
  )
}
