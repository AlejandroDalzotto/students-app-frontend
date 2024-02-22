import { APP_NAME } from "@/app/lib/constants";
import CreateModuleButton from "@/app/ui/buttons/create-module-button";
import Modules from "@/app/ui/dashboard/Courses";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Cursos | ${APP_NAME}`,
  description: `Todos los cursos cargados en el sistema de Varano.`,
}


export default function ModulePage() {
  return (
    <section className='w-full px-5 relative min-h-full rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Modulos</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>En esta página verás toda la información sobre los modulos actuales que hay en el sistema.</p>
      </header>
      
      <article className="mb-5 w-full flex items-center justify-start">
        <CreateModuleButton />
      </article>

      <Suspense fallback={<h1>Cargando...</h1>}>
        <Modules />
      </Suspense>

    </section>
  )
}
