import { fetchFilteredStudents } from "@/app/lib/actions"
import Row from "./Row"
import { Student } from "@/app/lib/definitions"

export default async function Table({ query }: { query: string }) {

  const students: Student[] = await fetchFilteredStudents(query)

  return (
    <table className="w-full max-w-[1008px] p-2 text-gray-900 table rounded-lg">
      <thead className="rounded-lg text-left text-sm font-normal">
        <tr>
          <th scope="col" className="px-4 py-5 text-lg text-center font-medium sm:pl-6">
            Código
          </th>
          <th scope="col" className="px-3 py-5 text-lg text-center font-medium">
            Nombre y apellido
          </th>
          <th scope="col" className="px-3 py-5 text-lg text-center font-medium">
            Fec. de Nacimiento
          </th>
          <th scope="col" className="px-3 py-5 text-lg text-center  font-medium">
            Dirección
          </th>
          <th scope="col" className="px-3 py-5 text-lg text-center font-medium">
            DNI
          </th>
          <th scope="col" className="px-3 py-5 text-lg text-center font-medium">
            Legajo
          </th>
          <th scope="col" className="relative py-3 pl-6 pr-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
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
  )
}