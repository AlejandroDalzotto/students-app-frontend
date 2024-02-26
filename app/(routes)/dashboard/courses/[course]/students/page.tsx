import { fetchStudentsByCourse } from "@/app/lib/actions";
import clsx from "clsx";



export default async function StudentsByCoursePage({ params }: { params: { course: string; } }) {

  const courseName = decodeURIComponent(params.course);
  const students = await fetchStudentsByCourse(courseName);

  return (
    <section className="h-full w-full relative p-5 flex flex-col gap-5">
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Alumnos de <span className="text-green-500">{courseName}</span></h2>
      </header>

      <article className="grid w-full grid-cols-6">

        <div className="col-span-5 flex flex-col gap-y-2">
          <header className="grid grid-cols-12 py-2 px-12 w-full border bg-black/5 dark:bg-white/5 dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg">
            <p className="col-span-2 text-lg font-semibold">Nombre y apellido</p>
            <p className="col-span-1 text-lg font-semibold">DNI</p>
            <p className="col-span-2 text-lg font-semibold">Dirección</p>
            <p className="col-span-3 text-lg font-semibold">Correo</p>
            <p className="col-span-1 text-lg font-semibold">Matricula</p>
            <p className="col-span-1 text-lg font-semibold">Legajo</p>
          </header>
          {
            students.map((student) => {
              return (
                <div className="grid grid-cols-12 py-1 px-12 w-full border bg-black/5 dark:bg-transparent dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg" key={student.address + student.legajo}>
                  <p className="col-span-2">{student.name}, {student.lastName}</p>
                  <p className="col-span-1">{student.dni.toLocaleString()}</p>
                  <p className="col-span-2">{student.address}</p>
                  <p className="col-span-3">{student.mail}</p>
                  <p className="col-span-1">{student.matricula}</p>
                  <p className={clsx("col-span-1",
                    { "text-green-500": student.legajo },
                    { "text-red-500": !student.legajo },
                  )}>{student.legajo ? "Completo" : "Incompleto"}</p>
                </div>
              )
            })
          }
        </div>

        <div className="col-span-1">

        </div>

      </article>
    </section>
  )
}
