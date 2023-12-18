import Image from "next/image";
import SignUpForm from "../ui/SignUpForm";
import type { Metadata } from "next";
import { APP_NAME } from "../lib/constants";

export const metadata: Metadata = {
  title: `Crear cuenta | ${APP_NAME}`,
  description: "Puedes crear una cuenta a partir de una serie de datos que debes ingresar.",
}

export default function SignUpPage() {
  return (
    <main className="relativa p-4 container mx-auto h-screen grid place-content-center">
      <section className="w-full flex gap-x-20 justify-center">
        <SignUpForm />
        <Image
          src="/signup-image-desktop.svg"
          alt="Ilustración de la página registrar"
          width={1122}
          height={939}
          className="hidden lg:block w-screen max-w-xl select-none"
        />
      </section>
    </main>
  )
}
