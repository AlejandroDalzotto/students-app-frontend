import Image from "next/image";
import SignInForm from "../ui/SignInForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar sesión"
}

export default function SignInPage() {
  return (
    <main className="relativa p-4 container mx-auto h-screen grid place-content-center">
      <section className="w-full flex gap-x-5 justify-center">
        <SignInForm />
        <Image
          src="/login-image-desktop.svg"
          alt="Imagen login"
          width={576}
          height={612}
          className="hidden lg:block w-screen max-w-xl select-none"
          priority={true}
        />
      </section>
    </main>
  )
}
