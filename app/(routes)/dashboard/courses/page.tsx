import { fetchCoursesPages } from "@/app/lib/actions";
import { APP_NAME } from "@/app/lib/constants";
import CreateCourseButton from "@/app/ui/buttons/create-course-button";
import CoursesTable from "@/app/ui/dashboard/tables/CoursesTable";
import Pagination from "@/app/ui/dashboard/Pagination";
import SearchBar from "@/app/ui/dashboard/SearchBar";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Cursos | ${APP_NAME}`,
  description: `Todos los cursos cargados en el sistema de Varano.`,
}


export default async function CoursePage({
  searchParams
}: {
  searchParams?: {
    query?: string,
    page?: string,
  }
}) {

  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  const totalPages = await fetchCoursesPages(query);

  return (
    <section className='w-full h-full row-[span_2/span_-1] p-6 relative rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Cursos</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>En esta página verás toda la información sobre los cursos actuales que hay en el sistema.</p>
      </header>
      <section className="grid grid-rows-[9%_minmax(0,91%)] h-full w-full relative gap-y-4">
        <article className="row-span-1 w-full flex items-center justify-between">
          <SearchBar disabled={totalPages <= 1} placeholder="Ingresa nombre del curso" label="Buscar curso..." />
          <CreateCourseButton />
        </article>
        <article className="row-[span_2/span_-1] grid grid-rows-[80%_minmax(0,20%)]">
          <Suspense fallback={<h1>Cargando...</h1>}>
            <CoursesTable query={query} currentPage={currentPage} />
          </Suspense>

          {totalPages >= 2 &&
            <div className="mt-5 flex w-full justify-center">
              <Pagination totalPages={totalPages} />
            </div>
          }
        </article>

      </section>
    </section>
  )
}
