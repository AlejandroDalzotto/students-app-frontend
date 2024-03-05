import { fetchModulesPages } from "@/app/lib/actions";
import { APP_NAME } from "@/app/lib/constants";
import CreateModuleButton from "@/app/ui/buttons/create-module-button";
import Pagination from "@/app/ui/dashboard/Pagination";
import SearchBar from "@/app/ui/dashboard/SearchBar";
import Modules from "@/app/ui/dashboard/tables/Modules";
import { type Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Módulos | ${APP_NAME}`,
  description: `Todos los módulos cargados en el sistema de Varano.`,
}

export default async function ModulesPage({
  searchParams
}: {
  searchParams?: {
    query?: string,
    page?: string,
  }
}) {

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchModulesPages(query);

  return (
    <section className='w-full relative h-full row-[span_2/span_-1] p-6 rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Modulos</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>Aquí se encuentra toda la información sobre los modulos cargados en el sistema.</p>
      </header>

      <section className="grid grid-rows-[9%_minmax(0,91%)] h-full w-full relative gap-y-4">
        <article className="row-span-1 w-full flex items-center justify-between">
          <SearchBar placeholder="Ingresa el nombre del modulo" label="Buscar modulos..." />
          <CreateModuleButton />
        </article>
        <article className="row-[span_2/span_-1] grid grid-rows-[80%_minmax(0,20%)]">
          <Suspense fallback={<h1>Cargando...</h1>}>
            <Modules query={query} currentPage={currentPage} />
          </Suspense>

          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </article>

      </section>

    </section>
  )
}

