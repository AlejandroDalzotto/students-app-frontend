import { fetchModules } from "@/app/lib/actions";
import { formatDateString } from "@/app/lib/utils";

interface Props {
  query: string;
  currentPage: number;
}

export default async function Modules({ currentPage, query }: Props) {

  const modules = await fetchModules(query, currentPage);

  return (
    <article className="w-full flex flex-col gap-y-2 relative">
      <header className="grid items-center grid-cols-4 py-4 px-12 w-full border bg-black/5 dark:bg-white/5 dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg">
        <p>Nombre del módulo</p>
        <p>Curso</p>
        <p>Fec. de inicio</p>
        <p>Fec. de finalización</p>
      </header>
      {
        modules.map(({ course_name, finish, name, start }) => {
          return (
            <div
              className="group/box grid items-center grid-cols-4 py-2 px-12 w-full border rounded-lg shadow dark:border-neutral-700 transition-colors dark:hover:border-neutral-400"
              key={course_name + name + start}>
              <p className="font-medium">{name}</p>
              <p>{course_name}</p>
              <p>{formatDateString(start)}</p>
              <p>{formatDateString(finish)}</p>
            </div>
          )
        })
      }
    </article>
  )
}
