import { APP_NAME } from "@/app/lib/constants";
import DarkModeButton from "@/app/ui/buttons/dark-mode-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Configuraciones | ${APP_NAME}`,
  description: `Página de configuraciones de ${APP_NAME}`
}

export default function SettingsPage() {
  return (
    <section className="w-full h-full row-[span_2/span_-1] p-6 flex flex-col items-center justify-center">

      <div className="container mx-auto h-full flex flex-col gap-y-10">
        <header className="rounded-lg shadow bg-black/5 dark:bg-white/5 py-4 px-8">
          <h1 className="text-3xl font-semibold">Configuraciones</h1>
          <p className="text-lg">En esta sección puedes personalizar las configuraciones disponibles de la aplicación.</p>
        </header>

        <article className="flex-grow py-4">
          <div className="flex flex-col gap-y-4 py-3 px-6 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5">
            <p className="text-lg">Activa o desactiva el modo oscuro para adaptar la apariencia de la aplicación a tus preferencias.</p>
            <DarkModeButton />
          </div>
        </article>

        <footer className="flex-grow py-4 px-8 grid place-content-center">
          <p className="text-lg">Si necesitas ayuda con alguna configuración o tienes alguna pregunta, no dudes en contactarte con nosotros.</p>
        </footer>
      </div>
    </section>
  )
}
