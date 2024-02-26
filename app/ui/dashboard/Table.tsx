import { fetchFilteredStudents } from "@/app/lib/actions/student.actions"
import Row from "./Row"

export default async function Table({ query, currentPage }: { query: string, currentPage: number }) {

  const students = await fetchFilteredStudents(query, currentPage)

  return (
    <div className="w-full flex flex-col gap-y-2 relative">
      <header className="grid grid-cols-12 py-4 px-12 w-full border bg-black/5 dark:bg-white/5 dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg">
        <p className="col-span-3 text-lg font-semibold">Nombre y apellido</p>
        <p className="col-span-2 text-lg font-semibold">DNI</p>
        <p className="col-span-2 text-lg font-semibold">Dirección</p>
        <p className="col-span-2 text-lg font-semibold">Fec. Nacimiento</p>
        <p className="col-span-2 text-lg font-semibold">Matricula</p>
        <p className="col-span-1 text-lg font-semibold">Legajo</p>
      </header>

      {
        students.map(({ name, lastName, birth, address, dni, legajo, mail, matricula }) => (
          <Row key={mail + name + lastName} data={{
            name,
            lastName,
            dni,
            address,
            birth,
            matricula,
            legajo
          }} />
        ))
      }
    </div>
  )
}