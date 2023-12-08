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
        <div className="my-3 w-full flex justify-evenly relative gap-x-5">
          <Link href="/" title="Iniciar con google" className="w-full text-center select-none py-3 px-6 rounded-md bg-transparent font-medium shadow-black/30 shadow transition-all hover:bg-black/5 hover:shadow-none">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </Link>
          <Link href="/" title="Iniciar con facebook" className="w-full text-center text-blue-500 select-none py-3 px-6 rounded-md bg-transparent font-medium shadow-black/30 shadow transition-all hover:bg-black/5 hover:shadow-none">Facebook</Link>
        </div>

        <button
          className="bg-blue-500 text-white font-semibold text-xl transition-colors hover:bg-blue-700 duration-100 mx-auto block my-10 py-3 px-6 rounded-lg"
          type="submit">Crear</button>

        <Link href="/signin" className="uppercase font-medium text-neutral-500 text-xs mx-auto block p-2 w-fit hover:text-black">¿ya tienes una cuenta?</Link>
        <Link href="/" className="uppercase font-medium text-neutral-500 text-xs mx-auto block p-2 w-fit hover:text-black">volver a la pantalla principal</Link>
      </form>
    </section>
  )
}
