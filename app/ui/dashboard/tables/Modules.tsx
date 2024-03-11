import { fetchModules } from "@/app/lib/actions";
import WithoutNoDataOnTable from "../WithoutNoDataOnTable";

interface Props {
  query: string;
  currentPage: number;
}

export default async function Modules({ currentPage, query }: Props) {

  const { data } = await fetchModules(query, currentPage);

  if (!data.length) {
    return (
      <WithoutNoDataOnTable />
    )
  }

  return (
    <article className="w-full flex flex-col gap-y-2 relative">
      <header className="grid items-center grid-cols-2 py-4 px-12 w-full border bg-black/5 dark:bg-white/5 dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg">
        <p>Nombre del módulo</p>
        <p>Curso</p>
      </header>
      {
        data.map(({ course_name, name }) => {
          return (
            <div
              className="group/box grid items-center grid-cols-2 py-2 px-12 w-full border rounded-lg shadow dark:border-neutral-700 transition-colors dark:hover:border-neutral-400"
              key={course_name + name}>
              <p className="font-medium">{name}</p>
              <p>{course_name}</p>
            </div>
          )
        })
      }
    </article>
  )
}
