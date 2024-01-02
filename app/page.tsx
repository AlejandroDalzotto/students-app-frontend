import Image from "next/image";
import TitleNav from "@/app/ui/TitleNav";
import NavLinks from "@/app/ui/nav-links";
import Link from "next/link";

export default function HomePage() {

  return (
    <main className="p-6 container mx-auto relative">

      <header className="flex flex-col md:flex-row gap-y-5 w-full justify-between items-center py-10">
        <TitleNav />
        <NavLinks />
      </header>

      <section className="flex w-full relative justify-between mt-10 md:px-10 lg:px-20">
        <article className="w-full">
          <p className="text-5xl lg:text-7xl font-extrabold [text-wrap:balance]">Lleve sus datos de la <span className="text-blue-500">mejor manera</span></p>

          <ul className="flex flex-col gap-y-4 text-lg font-medium mt-10">
            <li>✔ Trabaje con seguridad y confianza</li>
            <li>✔ El mejor rendimiento</li>
            <li>✔ Todo lo que necesita para llevar su información académica</li>
          </ul>

          <div className="flex gap-x-5 mt-10">
            <Link href="/more-info" className="text-xl select-none py-3 px-6 rounded-md bg-transparent text-black font-medium shadow-black/50 shadow transition-all hover:bg-black/5 hover:shadow-none">Más información</Link>
            <Link href="/dashboard" className="text-xl select-none py-3 px-6 rounded-md bg-blue-500 text-white font-medium shadow transition-all hover:bg-blue-700 hover:shadow-none">Empezar</Link>
          </div>
        </article>
        <article>
          <Image
            src="/home-image-desktop.svg"
            alt="Imagen ilustrativa para escritorio"
            width={1122}
            height={939}
            className="w-screen max-w-lg select-none hidden lg:block"
            priority
          />
        </article>
      </section>

      <footer className="w-full flex justify-center mt-40">
        Hecho con ❤ por el equipo maravilla
      </footer>
    </main>
  )
}
