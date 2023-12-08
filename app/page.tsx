import Image from "next/image";
import TitleNav from "./ui/TitleNav";
import NavLinks from "./ui/nav-links";
import Link from "next/link";

export default function HomePage() {

  return (
    <main className="p-6 container mx-auto relative">

      <header className="flex justify-between items-center py-10 px-20">
        <TitleNav />
        <NavLinks />
      </header>

      <section className="flex w-full justify-between pt-20 px-20">
        <article>
          <p className="text-7xl font-extrabold" style={{ textWrap: "balance" }}>Lleve sus datos de la <span className="text-blue-500">mejor manera</span></p>

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
            className="w-screen max-w-lg select-none"
          />
        </article>
      </section>

      <footer className="w-full flex justify-center mt-40">
        Hecho con ❤ por el equipo maravilla
      </footer>
    </main>
  )
}
