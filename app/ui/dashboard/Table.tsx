import { fetchFilteredStudents } from "@/app/lib/actions"
import Row from "./Row"
import { Student } from "@/app/lib/definitions"

export default async function Table({ query, currentPage }: { query: string, currentPage: number }) {

  const students: Student[] = await fetchFilteredStudents(query, currentPage)

  return (
    <div className="w-full relative h-[597px]">
      <table className="w-full p-2 text-neutral-900 table rounded-lg">
        <thead className="rounded-lg text-left text-sm font-normal">
          <tr>
            <th scope="col" className="dark:text-white px-4 py-5 text-lg text-center font-medium sm:pl-6">
              Código
            </th>
            <th scope="col" className="dark:text-white px-3 py-5 text-lg text-center font-medium">
              Nombre y apellido
            </th>
            <th scope="col" className="dark:text-white px-3 py-5 text-lg text-center font-medium">
              Fec. de Nacimiento
            </th>
            <th scope="col" className="dark:text-white px-3 py-5 text-lg text-center  font-medium">
              Dirección
            </th>
            <th scope="col" className="dark:text-white px-3 py-5 text-lg text-center font-medium">
              DNI
            </th>
            <th scope="col" className="dark:text-white px-3 py-5 text-lg text-center font-medium">
              Legajo
            </th>
          </tr>
        </thead>
        <tbody className="bg-transparent w-full">
          {students.map(({ id_student: id, name, lastName, birth, address, dni, legajo }) => (
            <Row key={id} data={{
              id_student: id,
              name,
              lastName,
              birth,
              address,
              dni,
              legajo
            }} />
          ))}
        </tbody>
      </table>
    </div>
  )
}