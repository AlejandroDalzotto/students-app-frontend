import { getAllStudents } from "@/app/lib/services/student.service"

export default async function Table() {

  const students = await getAllStudents()

  return (
    <table className="w-full max-w-5xl p-2 text-gray-900 table rounded-lg">
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
        {students?.map((student) => (
          <tr
            key={student.id_student}
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
          >
            <td className="whitespace-nowrap text-lg text-center px-3 py-3">
              {student.id_student}
            </td>
            <td className="whitespace-nowrap text-lg text-center px-3 py-3">
              {student.name}, {student.lastName}
            </td>
            <td className="whitespace-nowrap text-lg text-center px-3 py-3">
              {new Date(student.birth).toLocaleDateString()}
            </td>
            <td className="whitespace-nowrap text-lg text-center px-3 py-3">
              {student.address}
            </td>
            <td className="whitespace-nowrap text-lg text-center px-3 py-3">
              {student.dni}
            </td>
            <td className="whitespace-nowrap text-lg text-center px-3 py-3">
              {student.legajo}
            </td>
            {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
              <div className="flex justify-end gap-3">
                <UpdateInvoice id={student.id} />
                <DeleteInvoice id={student.id} />
              </div>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  )
}