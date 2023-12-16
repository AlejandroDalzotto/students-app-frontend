import type { Student, StudentFromForm } from "../definitions";

const BASE_URL = "http://localhost:8080/api/student"

export const getAllStudents = async (): Promise<Student[] | string> => {
  try {
    const students = await fetch(`${BASE_URL}/all`, {
      cache: "no-store"
    }).then(res => res.json()) as Student[]

    return students
  } catch (error) {
    console.error((error as Error).message)
    return "Error al traer a los alumnos."
  }
}

export const getAllStudentsByFilter = async (query: string) => {
  try {
    const students = await fetch(`${BASE_URL}/all/filter?query=${query}`, { cache: "no-store" }).then(r => r.json()) as Student[]

    return students

  } catch (error) {
    console.error((error as Error).message)
    return "Error al traer a los alumnos."
  }
}

export const getStudentById = async (id: number | string): Promise<Student | string> => {
  try {
    const students = await fetch(`${BASE_URL}/get/${id}`).then(res => res.json()) as Student

    return students
  } catch (error) {
    console.error((error as Error).message)
    return (error as Error).message
  }
}

export const saveStudent = async (student: StudentFromForm): Promise<Student | string> => {
  try {
    const res = await fetch(`${BASE_URL}/add`, {
      method: "POST",
      body: JSON.stringify(student)
    }).then(r => r.json()) as Student

    return res
  } catch (error) {
    console.error((error as Error).message)
    return (error as Error).message
  }
}

export const updateStudentById = async (id: number | string, newValues: StudentFromForm): Promise<Student | string> => {
  try {

    const res = await fetch(`${BASE_URL}/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify(newValues)
    }).then(r => r.json()) as Student

    return res

  } catch (error) {
    console.error((error as Error).message)
    return (error as Error).message
  }
}

export const disableStudentById = async (id: string | number): Promise<Student | string> => {
  try {

    const res = await fetch(`${BASE_URL}/inactive/${id}`, {
      method: "PUT"
    }).then(r => r.json()) as Student

    return res

  } catch (error) {
    console.error((error as Error).message)
    return (error as Error).message
  }
}
