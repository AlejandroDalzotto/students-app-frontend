import { fetchAcademicTotalPages } from "@/app/lib/actions/academic-records.actions";
import Pagination from "@/app/ui/dashboard/Pagination";
import SearchBar from "@/app/ui/dashboard/SearchBar";
import AcademicRecords from "@/app/ui/dashboard/tables/AcademicRecords";
import { Suspense } from "react";

export default async function AcademicRecordsPage({
  searchParams
}: {
  searchParams?: {
    query?: string,
    page?: string,
  }
}) {

  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  const totalPages = await fetchAcademicTotalPages(query);
  return (
    <section className='w-full h-full row-[span_2/span_-1] p-6 relative rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Registros academicos</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>En esta página verás toda la información académica de los alumnos. Así mismo podras modificarla o eliminarla.</p>
      </header>
      <section className="grid grid-rows-[9%_minmax(0,91%)] h-full w-full relative gap-y-4">
        <article className="row-span-1 w-full flex items-center justify-between">
          <SearchBar placeholder="Ingresa nombre alumno" label="Buscar registros..." />
          {/* <CreateAcademicRecordButton /> */}
        </article>
        <article className="row-[span_2/span_-1] grid grid-rows-[80%_minmax(0,20%)]">
          <Suspense fallback={<h1>Cargando...</h1>}>
            <AcademicRecords query={query} currentPage={currentPage} />
          </Suspense>

          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </article>

      </section>
    </section>
  )
}
