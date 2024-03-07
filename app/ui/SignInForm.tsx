"use client";

import Link from "next/link";
import { login } from "../lib/actions/auth.actions";
import { useState } from "react";
import { LoginSchema } from "@/schemas";
import { toast } from "sonner";
import SubmitButton from "./buttons/submit-button";
import clsx from "clsx";

type ErrorField = { field: string, message: string, }

export default function SignInForm() {

  const [errors, setErrors] = useState<ErrorField[]>([])

  const handleAction = async (formData: FormData) => {
    // Reset errors
    setErrors([]);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Construct new module object
    const rawUser = {
      username: formData.get("username"),
      password: formData.get("password"),
    }

    // Validate object
    const result = LoginSchema.safeParse(rawUser);

    if (!result.success) {
      setErrors(result.error.issues.map(issue => ({ field: issue.path[0].toString(), message: issue.message })));
      toast.error("Algunos datos ingresados son incorrectos");
      return;
    }

    const response = await login(result.data);

    if (response?.error) {
      toast.error("Credenciales incorrectas");
      return;
    }

    toast.success("Sesión iniciada correctamente");

  }

  return (
    <section className="relative flex flex-col items-center py-20 px-6 max-w-lg w-screen">

      <h2 className="text-3xl my-3 font-semibold tracking-tighter">Iniciar sesión</h2>

      <form action={handleAction}>
        <input
          autoComplete="off"
          name="username"
          className={clsx(
            "my-3 w-full py-3 px-6 placeholder:text-neutral-500 border-2 bg-neutral-200 dark:bg-white dark:text-black rounded-lg",
            { "border-red-500": errors.find(v => v.field === "username") }
          )}
          type="text"
          required
          placeholder="Nombre de usuario"
          onFocus={() => setErrors([])}
        />
        {errors.find(v => v.field === "username") && <span className="text-red-500 text-sm">{errors.find(v => v.field === "username")?.message}</span>}
        <input
          name="password"
          className={clsx(
            "my-3 w-full py-3 px-6 placeholder:text-neutral-500 border-2 bg-neutral-200 dark:bg-white dark:text-black rounded-lg",
            { "border-red-500": errors.find(v => v.field === "username") }
          )}
          type="password"
          required
          placeholder="Contraseña"
          onFocus={() => setErrors([])}
        />
        {errors.find(v => v.field === "password") && <span className="text-red-500 text-sm">{errors.find(v => v.field === "password")?.message}</span>}

        <SubmitButton>
          Entrar
        </SubmitButton>

        <Link href="/signup" className="uppercase font-medium text-neutral-500 dark:text-white text-xs mx-auto block p-4 md:p-2 w-fit hover:text-black dark:hover:text-neutral-200">crear cuenta</Link>
        <Link href="/" className="uppercase font-medium text-neutral-500 dark:text-white text-xs mx-auto block p-4 md:p-2 w-fit hover:text-black dark:hover:text-neutral-200">volver a la pantalla principal</Link>
      </form>
    </section>
  )
}


/*


<style>
  
</style>



*/