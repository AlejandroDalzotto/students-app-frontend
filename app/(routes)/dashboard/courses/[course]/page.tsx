import { getSingleSimpleCourse } from "@/app/lib/actions/course.actions";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Infomación del curso | Varano",
  description: "Ver información completa del curso registrado."
}

export default async function DynamicCoursePage({ params }: { params: { course: string } }) {

  const courseName = decodeURIComponent(params.course);
  const { count_students, last_subjects_record } = await getSingleSimpleCourse(courseName);

  return (
    <section className='w-full px-5 relative min-h-full rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>{courseName}</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>En esta página verás toda la información sobre el curso <span className="text-green-500">{courseName}</span>.</p>
      </header>

      <article className="h-full relative p-5 grid grid-cols-5 gap-5">
        <div className="flex flex-col gap-y-5 col-span-4">
          <h3 className="text-2xl font-medium text-neutral-950 dark:text-neutral-50">Materias de {courseName}</h3>
          <header className="grid items-center grid-cols-4 py-4 px-12 w-full border bg-black/5 dark:bg-white/5 dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg">
            <p className="col-span-3">Nombre de la materia</p>
            <p>Alumnos registrados</p>
          </header>
          <div className="overflow-y-auto flex flex-col gap-y-5">
            {
              last_subjects_record.map((s) => {
                return (
                  <div
                    key={s.subject_name + s.count_students}
                    className="group/subject grid grid-cols-4 py-4 px-12 w-full border-2 rounded-lg shadow dark:border-neutral-700 transition-colors dark:hover:border-neutral-400"
                  >
                    <p className="col-span-3">{s.subject_name}</p>
                    <span className="dark:text-neutral-700 group-hover/subject:text-neutral-200 transition-colors">Hay {s.count_students} {s.count_students === 1 ? "alumno" : "alumnos"} cursando esta materia.</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="col-span-1 relative">
          <Link href={`/dashboard/courses/${courseName}/students`} className="border-2 rounded-lg shadow dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 h-full w-full grid place-content-center justify-items-center">
            <h3 className="font-extrabold text-7xl">{count_students}</h3>
            <span>{count_students === 1 ? "Alumno" : "Alumnos"} cursando</span>
          </Link>
        </div>
      </article>
    </section>
  )
}
