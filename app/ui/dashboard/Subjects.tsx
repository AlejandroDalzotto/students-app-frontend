import { getCourses } from "@/app/lib/actions/course.actions"
import Link from "next/link"

export default async function Subjects() {

  const data = await getCourses()

  return (
    <article className="grid gap-5 grid-cols-5">
      {
        data.map(({ name, subjects }) => {
          return (
            <div className="group/box rounded-lg border border-neutral-400 dark:border-neutral-700 p-5 transition-colors hover:bg-white/5" key={name}>
              <h2 className="font-medium text-2xl mb-5">{name}</h2>
              {
                subjects.length ? (
                  subjects.map((sub) => {
                    return (
                      <div key={sub.name + sub.module_name}>
                        <Link
                          className="text-lg transition-all hover:text-blue-500 active:scale-90"
                          href={"#"}
                        >
                          {sub.name}
                        </Link>
                      </div>
                    )
                  })
                ) : (
                  <p className="font-medium text-lg dark:text-neutral-500 dark:group-hover/box:text-neutral-200 transition-colors">No hay materias asignadas</p>
                )
              }
            </div>
          )
        })
      }
    </article>
  )
}
