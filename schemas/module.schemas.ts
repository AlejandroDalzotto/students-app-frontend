import { z } from "zod";

export const ModuleSchema = z.object({
  name: z
  .string()
  .trim()
  .min(3, {
    message: "El nombre debe contener al menos 3 caracteres."
  })
  .max(25, {
    message: "El nombre no debe contener más de 25 caracteres."
  }),
  course_name: z
  .string()
  .trim()
  .min(3, {
    message: "El nombre del curso debe contener al menos 3 caracteres."
  })
  .max(30, {
    message: "El nombre del curso no debe contener más de 30 caracteres."
  })
})

export type ModuleRequest = z.infer<typeof ModuleSchema>
