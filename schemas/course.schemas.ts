import { z } from "zod";

export const CourseSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, {
      message: "El nombre debe contener al menos 3 caracteres."
    })
    .max(30, {
      message: "El nombre no debe contener más de 30 caracteres."
    }),
})
