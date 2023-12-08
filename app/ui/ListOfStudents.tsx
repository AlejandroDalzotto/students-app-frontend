import { fetchStudents } from "../lib/services/student.service"

export default async function ListOfStudents() {

  const students = await fetchStudents()

  return (
    <table className="w-full p-2 rounded-lg max-w-5xl">
      <thead>
        <tr>
          <th className="p-2">Código</th>
          <th className="p-2">Nombre y Apellido</th>
          <th className="p-2">Fec. de Nacimiento</th>
          <th className="p-2">Sexo</th>
          <th className="p-2">Dirección</th>
          <th className="p-2">DNI</th>
          <th className="p-2">Legajo</th>
        </tr>
      </thead>
      <tbody>
        {students.map(({ code, name, lastname, birthdate, gender, address, dni, legajo }, index) => {
          return (
            <tr key={code} className={`rounded ${index % 2 == 0 ? "bg-black/5" : "bg-black/20"}`}>
              <td className="text-lg p-4 text-center">{code}</td>
              <td className="text-lg p-4 text-left">{name}, {lastname}</td>
              <td className="text-lg p-4 text-left">{birthdate}</td>
              <td className="text-lg p-4 text-center">{gender}</td>
              <td className="text-lg p-4 text-left">{address}</td>
              <td className="text-lg p-4 text-right">{dni}</td>
              <td className="text-lg p-4 text-center">{legajo}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
