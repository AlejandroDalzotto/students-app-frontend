import { APP_NAME } from "@/app/lib/constants";
import AddButton from "@/app/ui/dashboard/AddButton";
import Modules from "@/app/ui/dashboard/Modules";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Modulos | ${APP_NAME}`,
  description: `Todos los modulos cargados en el sistema de Varano.`,
}


export default function ModulePage() {
  return (
    <section className='w-full relative min-h-full rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Modulos</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>En esta página verás toda la información sobre los modulos actuales que hay en el sistema.</p>
      </header>

      <article className="mb-5 w-full flex items-center justify-start">
        <AddButton nagivateTo="/dashboard/modules/add" title="Agregar un nuevo modulo al sistema" />
      </article>

      <Suspense fallback={<h1>Cargando...</h1>}>
        <Modules />
      </Suspense>

    </section>
  )
}