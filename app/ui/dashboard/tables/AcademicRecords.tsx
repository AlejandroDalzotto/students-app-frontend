import { getAllRecords } from "@/app/lib/actions";

interface Props {
  query: string;
  currentPage: number;
}

export default async function AcademicRecords({ currentPage, query }: Props) {

  const records = await getAllRecords(query, currentPage);

  return (
    <article className="w-full flex flex-col gap-y-2 relative">
      <header className="grid items-center grid-cols-12 py-4 px-12 w-full border bg-black/5 dark:bg-white/5 dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg">
        <p className="col-span-2">Alumno</p>
        <p className="col-span-2">Curso</p>
        <p className="col-span-1">Año de cursado</p>
        <p className="col-span-2">Estado</p>
        <p className="col-span-5">Observaciones</p>
      </header>
      {
        records.map(({ course_name, academic_state, student_name, study_year, comment, unique_code }) => {
          return (
            <div
              className="group/box grid items-center grid-cols-12 py-2 px-12 w-full border rounded-lg shadow dark:border-neutral-700 transition-colors dark:hover:border-neutral-400"
              key={unique_code}>
              <p className="col-span-2">{student_name}</p>
              <p className="col-span-2">{course_name}</p>
              <p className="col-span-1">{study_year}</p>
              <p className="col-span-2">{academic_state}</p>
              <p className="col-span-5">{comment}</p>
            </div>
          )
        })
      }
    </article>
  )
}
