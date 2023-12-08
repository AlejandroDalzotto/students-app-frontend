import type { Student } from "../definitions";

const STUDENT_PLACEHOLDER: Student[] = [
  {
    code: 1351,
    name: "pedro",
    dni: 23412343
  },
  {
    code: 1123,
    name: "sebastian",
    dni: 27546104
  },
  {
    code: 6732,
    name: "nestor",
    dni: 41212261
  }
  ,
  {
    code: 7183,
    name: "maría",
    dni: 25432115
  }
]

export const fetchStudents = async () => {
  try {

    await new Promise((res) => setTimeout(res, 2000))

    return STUDENT_PLACEHOLDER
  } catch (error) {
    console.error((error as Error).message)
    throw new Error("Error fetching students")
  }
}