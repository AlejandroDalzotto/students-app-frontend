"use client";

import Link from "next/link";
import { register } from "../lib/actions/auth.actions";
import { RegisterSchema } from "@/schemas";
import { toast } from "sonner";
import { useState } from "react";
import SubmitButton from "./buttons/submit-button";

type ErrorField = { field: string, message: string, }

export default function SignUpForm() {

  const [errors, setErrors] = useState<ErrorField[]>([])

  const handleAction = async (formData: FormData) => {
    // Reset errors
    setErrors([]);

    // Only for test
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    // Construct new register user object
    const rawNewUser = {
      name: formData.get("name"),
      lastname: formData.get("lastname"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    }

    // Validate object
    const result = RegisterSchema.safeParse(rawNewUser);

    if (!result.success) {
      setErrors(result.error.issues.map(issue => ({ field: issue.path[0].toString(), message: issue.message })));
      toast.error("Algunos datos ingresados son incorrectos");
      return;
    }

    const response = await register(result.data);

    if (response?.message) {
      toast.error(response.message);
      return;
    }

    toast.success("¡Registro exitoso!");

  }

  return (
    <section className="relative flex flex-col items-center py-20 px-6 max-w-lg w-screen">

      <h2 className="text-3xl my-3 font-semibold tracking-tighter">Registrarse</h2>

      <form action={handleAction} className="relative flex flex-col w-full gap-y-6">
        <div className="w-full flex gap-x-6">
          <div className="flex flex-col gap-y-6">
            <input
              className="w-full py-3 px-6 placeholder:text-neutral-500 bg-neutral-200 dark:bg-white dark:text-black rounded-lg"
              type="text"
              placeholder="Nombre"
              name="name"
              autoComplete="off"
              onFocus={() => setErrors([])}
              required
            />
            {errors.find(v => v.field === "name") && <span className="text-red-500 text-sm">{errors.find(v => v.field === "name")?.message}</span>}
          </div>
          <div className="flex flex-col gap-y-6">
            <input
              className="w-full py-3 px-6 placeholder:text-neutral-500 bg-neutral-200 dark:bg-white dark:text-black rounded-lg"
              type="text"
              placeholder="Apellido"
              name="lastname"
              autoComplete="off"
              onFocus={() => setErrors([])}
              required
            />
            {errors.find(v => v.field === "lastname") && <span className="text-red-500 text-sm">{errors.find(v => v.field === "lastname")?.message}</span>}
          </div>
        </div>
        <input
          className="w-full py-3 px-6 placeholder:text-neutral-500 bg-neutral-200 dark:bg-white dark:text-black rounded-lg"
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          autoComplete="off"
          onFocus={() => setErrors([])}
          required
        />
        {errors.find(v => v.field === "username") && <span className="text-red-500 text-sm">{errors.find(v => v.field === "username")?.message}</span>}
        <input
          className="w-full py-3 px-6 placeholder:text-neutral-500 bg-neutral-200 dark:bg-white dark:text-black rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
          onFocus={() => setErrors([])}
          required
        />
        {errors.find(v => v.field === "email") && <span className="text-red-500 text-sm">{errors.find(v => v.field === "email")?.message}</span>}
        <input
          className="w-full py-3 px-6 placeholder:text-neutral-500 bg-neutral-200 dark:bg-white dark:text-black rounded-lg"
          type="password"
          placeholder="Contraseña"
          name="password"
          autoComplete="off"
          onFocus={() => setErrors([])}
          required
        />
        {errors.find(v => v.field === "password") && <span className="text-red-500 text-sm">{errors.find(v => v.field === "password")?.message}</span>}

        <div className="grid w-full place-content-center">
          <SubmitButton>
            Crear cuenta
          </SubmitButton>
        </div>

        <footer>
          <Link href="/signin" className="uppercase font-medium text-neutral-500 dark:text-white text-xs mx-auto block p-4 md:p-2 w-fit hover:text-black dark:hover:text-neutral-200">¿ya tienes una cuenta?</Link>
          <Link href="/" className="uppercase font-medium text-neutral-500 dark:text-white text-xs mx-auto block p-4 md:p-2 w-fit hover:text-black dark:hover:text-neutral-200">volver a la pantalla principal</Link>
        </footer>
      </form>
    </section>
  )
}
