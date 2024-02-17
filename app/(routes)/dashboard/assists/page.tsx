import { APP_NAME } from "@/app/lib/constants";
import CreateAssistenceButton from "@/app/ui/buttons/create-assistence-button";
import Assists from "@/app/ui/dashboard/Assists";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Asistencias | ${APP_NAME}`,
  description: `Carga las asistencias de los alumnos en ${APP_NAME}.`,
}

export default function AssistsPage() {
  return (
    <section className='w-full px-5 relative min-h-full rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Asistencias</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>Aquí podras ver el historial de asistencias de los alumnos a las respectivas materias.</p>
      </header>

      <article className="mb-5 w-full flex items-center justify-start">
        <CreateAssistenceButton />
      </article>

      <Suspense fallback={<h1>Cargando...</h1>}>
        <Assists />
      </Suspense>

    </section>
  )
}
