import { fetchStudentsByCourse } from "@/app/lib/actions";
import clsx from "clsx";
import WithoutNoDataOnTable from "../WithoutNoDataOnTable";

interface Props {
  course: string;
  query: string;
  currentPage: number;
}

export default async function StudentByCourse({ course, currentPage, query }: Props) {

  const { data } = await fetchStudentsByCourse(course, query, currentPage);

  if (!data.length) {
    return (
      <WithoutNoDataOnTable />
    )
  }

  return (
    <div className="col-span-8 flex flex-col gap-y-2 relative">
      <header className="grid grid-cols-12 py-2 px-12 w-full border bg-black/5 dark:bg-white/5 dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg">
        <p className="col-span-3 text-lg font-semibold">Nombre y apellido</p>
        <p className="col-span-1 text-lg font-semibold">DNI</p>
        <p className="col-span-2 text-lg font-semibold">Dirección</p>
        <p className="col-span-3 text-lg font-semibold">Correo</p>
        <p className="col-span-2 text-lg font-semibold">Matricula</p>
        <p className="col-span-1 text-lg font-semibold">Legajo</p>
      </header>
      {
        data.map((student) => {
          return (
            <div className="grid items-center grid-cols-12 py-1 px-12 w-full border bg-black/5 dark:bg-transparent dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg" key={student.address + student.legajo}>
              <p className="col-span-3">{student.name}, {student.lastName}</p>
              <p className="col-span-1">{student.dni.toLocaleString()}</p>
              <p className="col-span-2">{student.address}</p>
              <p className="col-span-3">{student.mail}</p>
              <p className="col-span-2">{student.matricula}</p>
              <p className={clsx("col-span-1",
                { "text-green-500": student.legajo },
                { "text-red-500": !student.legajo },
              )}>
                {student.legajo ? "Completo" : "Incompleto"}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}
