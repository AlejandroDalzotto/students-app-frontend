import { z } from "zod";

export const ExamRecordSchema = z.object({
  state: z
    .string(),
  student_dni: z
    .number({
      invalid_type_error: "El valor ingresado para DNI no es númerico"
    })
    .min(1, {
      message: "El DNI no puede ser menor a 1."
    })
    .max(999999999, {
      message: "El valor del DNI no puede superar los 999.999.999"
    }),
  exam_key: z
    .string()
    .trim()
    .min(3, {
      message: "El nombre para identificar el examen debe contener entre 3 y 40 caracteres"
    })
    .max(40, {
      message: "El nombre para identificar el examen debe contener entre 3 y 40 caracteres"
    }),
  attended: z
    .boolean(),
  grade: z
    .number()
})
