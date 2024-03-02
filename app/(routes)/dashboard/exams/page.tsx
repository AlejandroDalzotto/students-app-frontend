import { fetchExamsPages } from "@/app/lib/actions";
import { APP_NAME } from "@/app/lib/constants";
import Exams from "@/app/ui/dashboard/Exams";
import Pagination from "@/app/ui/dashboard/Pagination";
import SearchBar from "@/app/ui/dashboard/SearchBar";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Examenes | ${APP_NAME}`,
  description: `Todos los examenes cargados en el sistema de Varano.`,
}

export default async function ExamsPage({
  searchParams
}: {
  searchParams?: {
    query?: string,
    page?: string,
  }
}) {

  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  const totalPages = await fetchExamsPages(query);

  return (
    <section className='w-full relative h-full row-[span_2/span_-1] p-6 rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Examenes</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>Aquí se encuentra toda la información sobre los últimos exámenes cargados en el sistema.</p>
      </header>
      
      <section className="grid grid-rows-[9%_minmax(0,91%)] h-full w-full relative gap-y-4">
        <article className="row-span-1 w-full flex items-center justify-between">
          <SearchBar placeholder="Ingresa el nombre del examen" label="Buscar examen..." />
          {/* <CreateExamButton /> */}
        </article>
        <article className="row-[span_2/span_-1] grid grid-rows-[80%_minmax(0,20%)]">
          <Suspense fallback={<h1>Cargando...</h1>}>
            <Exams query={query} currentPage={currentPage} />
          </Suspense>

          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </article>

      </section>

    </section>
  )
}
