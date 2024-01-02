import Link from "next/link";

export default function SignUpForm() {
  return (
    <section className="relative flex flex-col items-center py-20 px-6 max-w-lg w-screen">

      <h2 className="text-3xl my-3 font-semibold tracking-tighter">Registrarse</h2>

      <form>
        <input
          className="my-3 w-full py-3 px-6 placeholder:text-neutral-500 bg-neutral-200 rounded-lg leading-5"
          type="text"
          placeholder="Nombre de usuario"
        />
        <input
          className="my-3 w-full py-3 px-6 placeholder:text-neutral-500 bg-neutral-200 rounded-lg leading-5"
          type="email"
          placeholder="Email"
        />
        <input
          className="my-3 w-full py-3 px-6 placeholder:text-neutral-500 bg-neutral-200 rounded-lg leading-5"
          type="password"
          placeholder="Contraseña"
        />

        <button
          className="bg-blue-500 text-white font-semibold text-xl transition-colors hover:bg-blue-700 duration-100 mx-auto block my-10 py-3 px-6 rounded-lg"
          type="submit">Crear</button>

        <Link href="/signin" className="uppercase font-medium text-neutral-500 text-xs mx-auto block p-2 w-fit hover:text-black">¿ya tienes una cuenta?</Link>
        <Link href="/" className="uppercase font-medium text-neutral-500 text-xs mx-auto block p-2 w-fit hover:text-black">volver a la pantalla principal</Link>
      </form>
    </section>
  )
}
