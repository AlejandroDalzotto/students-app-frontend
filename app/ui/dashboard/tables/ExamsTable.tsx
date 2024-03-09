import { getAllExams } from "@/app/lib/actions/exams.actions"
import { formatDateString } from "@/app/lib/utils";
import Link from "next/link";

interface Props {
  query: string;
  currentPage: number;
}

export default async function ExamsTable({ currentPage, query }: Props) {

  const exams = await getAllExams(query, currentPage);

  return (
    <article className="w-full flex flex-col gap-y-2 relative">
      <header className="grid items-center grid-cols-4 py-4 px-12 w-full border bg-black/5 dark:bg-white/5 dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg">
        <p>Exámen</p>
        <p>Modulo</p>
        <p>Materia</p>
        <p>Fecha asignada</p>
      </header>
      {
        exams.map(({ key, module, subject, date }) => {
          return (
            <Link
              href={`/dashboard/exams/${key}`}
              className="group/box grid items-center grid-cols-4 py-2 px-12 w-full border rounded-lg shadow dark:border-neutral-700 transition-colors dark:hover:border-neutral-400"
              key={key + date}>
              <p className="font-medium">{key}</p>
              <p>{module}</p>
              <p>{subject}</p>
              <p>{formatDateString(date)}</p>
            </Link>
          )
        })
      }
    </article>
  )
}
