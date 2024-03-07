import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string().min(3, {
    message: "El nombre de usuario debe tener 3 caracteres como mínimo."
  }),
  password: z.string().min(3, {
    message: "La contraseña debe tener 3 caracteres como mínimo.",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, {
    message: "El nombre debe tener 3 caracteres como mínimo.",
  }),
  lastname: z.string().min(3, {
    message: "El apellido debe tener 3 caracteres como mínimo.",
  }),
  username: z.string().min(3, {
    message: "El nombre debe tener 3 caracteres como mínimo.",
  }),
  email: z.string().min(1, { message: "El email es requerido" }).email({
    message: "Formato de email invalido. Ej: example@gmail.com",
  }),
  password: z.string().min(6, {
    message: "Mínimo seis (6) caracteres son requeridos.",
  }),
});