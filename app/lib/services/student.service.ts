import type { Student, StudentFromForm } from "../definitions";

export const getAllStudents = async () => {
  try {
    const students = await fetch("http://localhost:8080/api/student/all", {
      cache: "no-store"
    }).then(res => res.json()) as Student[]

    return students
  } catch (error) {
    console.error((error as Error).message)
    throw new Error("Error fetching students")
  }
}

export const getStudentById = async (id: number | string) => {
  try {
    const students = await fetch(`http://localhost:8080/api/student/get/${id}`).then(res => res.json()) as Student

    return students
  } catch (error) {
    console.error((error as Error).message)
    throw new Error("Error fetching student " + id)
  }
}

export const saveStudent = async (student: StudentFromForm) => {

}

export const updateStudent = async (student: StudentFromForm) => {

}

export const disableStudentById = async (id: string | number) => {

}
