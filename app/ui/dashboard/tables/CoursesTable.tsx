import { getSimpleCourses } from "@/app/lib/actions/course.actions"
import Link from "next/link";
import WithoutNoDataOnTable from "../WithoutNoDataOnTable";

interface Props {
  query: string;
  currentPage: number;
}

export default async function CoursesTable({ currentPage, query }: Props) {

  const { data } = await getSimpleCourses(query, currentPage);

  if (!data.length) {
    return (
      <WithoutNoDataOnTable />
    )
  }

  return (
    <article className="w-full flex flex-col gap-y-2 relative">
      <header className="grid items-center grid-cols-3 py-4 px-12 w-full border bg-black/5 dark:bg-white/5 dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg">
        <p>Nombre del curso</p>
        <p>Materias registradas</p>
        <p>Alumnos registrados</p>
      </header>
      {
        data.map(({ course_name, count_subjects, count_students }) => {
          return (
            <Link
              href={`/dashboard/courses/${course_name}`}
              className="group/box grid items-center grid-cols-3 py-2 px-12 w-full border rounded-lg shadow dark:border-neutral-700 transition-colors dark:hover:border-neutral-400"
              key={course_name}>
              <p className="font-medium">{course_name}</p>

              {count_subjects > 0 ? (
                <div>
                  <p className="dark:text-neutral-500 dark:group-hover/box:text-neutral-200 transition-colors">
                    Cantidad de materias en el curso: {count_subjects}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="dark:text-neutral-500 dark:group-hover/box:text-neutral-200 transition-colors">
                    No hay materias asignadas a este curso
                  </p>
                </div>
              )}

              {count_students > 0 ? (
                <div>
                  <p className="dark:text-neutral-500 dark:group-hover/box:text-neutral-200 transition-colors">
                    Alumnos: {count_students}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="dark:text-neutral-500 dark:group-hover/box:text-neutral-200 transition-colors">
                    No hay alumnos participando en {course_name}
                  </p>
                </div>
              )}
            </Link>
          )
        })
      }
    </article>
  )
}
