import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, {
    message: "El nombre de usuario es requerido."
  }),
  password: z.string().min(1, {
    message: "La contraseña es requerida.",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, {
    message: "El nombre es requerido.",
  }),
  lastname: z.string().min(1, {
    message: "El apellido es requerido.",
  }),
  username: z.string().min(1, {
    message: "El nombre de usuario es requerido.",
  }),
  email: z.string().min(1, { message: "El email es requerido" }).email({
    message: "Formato de email invalido. Ej: example@gmail.com",
  }),
  password: z.string().min(6, {
    message: "Mínimo seis (6) caracteres son requeridos.",
  }),
});