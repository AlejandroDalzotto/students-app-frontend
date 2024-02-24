import { getCourses } from "@/app/lib/actions/course.actions"
import Link from "next/link"

export default async function Subjects() {

  const data = await getCourses()

  return (
    <article className="grid gap-5 grid-cols-5">
      {
        data.map(({ name, subjects }) => {
          return (
            <div className="rounded-lg border border-neutral-400 dark:border-neutral-700 p-5 transition-colors hover:bg-white/5" key={name}>
              <h2 className="font-medium text-2xl mb-5">{name}</h2>
              {
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
              }
            </div>
          )
        })
      }
    </article>
  )
}
