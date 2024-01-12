import { APP_NAME } from "@/app/lib/constants";
import DarkModeButton from "@/app/ui/buttons/dark-mode-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Configuraciones | ${APP_NAME}`,
  description: `Página de configuraciones de ${APP_NAME}`
}

export default function SettingsPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      
      <h1>Configuraciones</h1>

      <div className="w-full max-w-xl flex items-center justify-between mt-10">
        <p className="text-lg  font-medium">Este es el panel principal</p>
        <DarkModeButton />
      </div>
    </section>
  )
}
