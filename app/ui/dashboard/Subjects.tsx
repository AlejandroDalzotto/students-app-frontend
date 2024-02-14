import { getSubjects } from "@/app/lib/actions/subject.actions"

export default async function Subjects() {

  const subjects = await getSubjects()

  return (
    <article className="grid gap-5 grid-cols-1">
      {
        subjects.map(({ name, module_name, students }) => {
          return (
            <div key={name + module_name}>
              <h2>{module_name}</h2>
              <p>{name}</p>
            </div>
          )
        })
      }
    </article>
  )
}
