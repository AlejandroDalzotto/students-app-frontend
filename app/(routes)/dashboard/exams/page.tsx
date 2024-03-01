import { APP_NAME } from "@/app/lib/constants";
import Exams from "@/app/ui/dashboard/Exams";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Examenes | ${APP_NAME}`,
  description: `Todos los examenes cargados en el sistema de Varano.`,
}

export default function ExamsPage() {
  return (
    <section className='w-full relative h-full row-[span_2/span_-1] p-6 rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Examenes</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>Aquí se encuentra toda la información sobre los últimos exámenes cargados en el sistema.</p>
      </header>
      
      <article className="mb-5 w-full flex items-center justify-start">
        {/* <CreateCourseButton /> */}
      </article>

      <Suspense fallback={<h1>Cargando...</h1>}>
        <Exams />
      </Suspense>

    </section>
  )
}
