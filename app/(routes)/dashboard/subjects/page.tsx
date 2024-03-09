import { APP_NAME } from "@/app/lib/constants";
import CreateSubjectButton from "@/app/ui/buttons/create-subject-button";
import Subjects from "@/app/ui/dashboard/Subjects";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Materias | ${APP_NAME}`,
  description: `Todas las materias cargadas en el sistema de Varano.`,
}


export default function SubjectPage() {
  return (
    <section className='w-full relative h-full row-[span_2/span_-1] p-6 rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Materias</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>Aquí está toda la información sobre las materias cargadas en el sistema.</p>
      </header>

      <article className="mb-5 w-full flex items-center justify-start">
        <CreateSubjectButton />
      </article>

      <Suspense fallback={<h1>Cargando...</h1>}>
        <Subjects />
      </Suspense>

    </section>
  )
}