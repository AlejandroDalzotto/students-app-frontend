import { z } from "zod";

export const StudentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, {
      message: "El nombre debe contener entre 3 y 25 caracteres."
    })
    .max(30, {
      message: "El nombre debe contener entre 3 y 25 caracteres."
    }),
  lastName: z
    .string()
    .trim()
    .min(3, {
      message: "El apellido debe contener entre 3 y 30 caracteres."
    })
    .max(25, {
      message: "El apellido debe contener entre 3 y 30 caracteres."
    }),
  birth: z
    .string(),
  sex: z
    .string(),
  address: z
    .string()
    .min(5, {
      message: "La dirección debe tener un mínimo de 5 caracteres y como máximo 55."
    })
    .max(55, {
      message: "La dirección debe tener un mínimo de 5 caracteres y como máximo 55."
    }),
  dni: z
    .number({
      invalid_type_error: "El valor ingresado para DNI no es númerico"
    })
    .min(1, {
      message: "El DNI no puede ser menor a 1."
    })
    .max(999999999, {
      message: "El valor del DNI no puede superar los 999.999.999"
    }),
  cellPhone: z
    .number()
    .nullable(),
  linePhone: z
    .number()
    .nullable(),
  mail: z
    .string()
    .email({
      message: "El valor ingresado no es un email valido"
    })
    .min(5, {
      message: "El correo debe tener un mínimo de 5 caracteres y como máximo 30."
    })
    .max(30, {
      message: "El correo debe tener un mínimo de 5 caracteres y como máximo 30."
    }),
  legajo: z
    .number()
    .nullable(),
  matricula: z
    .number(),
  birthCert: z
    .boolean(),
  studyCert: z
    .boolean(),
  disability: z
    .boolean(),
  health: z
    .boolean(),
  course_name: z
    .string()
    .min(3, {
      message: "El nombre del curso debe contener entre 3 y 30 caracteres."
    })
    .max(30, {
      message: "El nombre del curso debe contener entre 3 y 30 caracteres."
    })
})

export const PromoteStudentSchema = z.object({
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
  new_course: z
    .string()
    .trim()
    .min(3, {
      message: "El nombre del curso debe contener al menos 3 caracteres."
    })
    .max(30, {
      message: "El nombre del curso no debe contener más de 30 caracteres."
    }),
  study_year: z
    .number()
    .min(1900, {
      message: "El valor mínimo para que año de estudio es 1900"
    })
    .max(2025, {
      message: "El año de estudio máximo es 2155"
    }),
  comment: z
    .string()
    .trim()
    .min(10, {
      message: "El valor mínimo para un comentario es de 10 caracteres"
    })
    .max(100, {
      message: "El comentario no debe tener más de 100 caracteres"
    })
    .nullable(),
  state: z.enum(
    ["Se Recibió", "Regular", "Abandonó", "Repetidor"],
    {
      invalid_type_error: "El estado es invalido"
    }
  )
})