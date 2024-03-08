"use server";

import { revalidatePath } from "next/cache";
import { BASE_COURSE_URL, BASE_STUDENT_URL, ITEMS_PER_PAGE } from "../constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Student } from "../definitions";

export async function fetchFilteredStudents(query: string = "", currentPage: number = 1) {

  const token = cookies().get("token")?.value ?? ""

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const students: Student[] = await fetch(`${BASE_STUDENT_URL}/all/filter?query=${query}&limit=${ITEMS_PER_PAGE}&offset=${offset}`, {
      cache: "no-store",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(r => r.json())

    return students

  } catch (error) {
    console.error((error as Error).message)
    throw new Error("Error al traer alumno")
  }
}

export async function fetchStudentByDni(dni: number | string) {

  const token = cookies().get("token")?.value ?? ""

  try {

    const student: Student = await fetch(`${BASE_STUDENT_URL}/get/dni/${dni}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(r => r.json())

    return student

  } catch (error) {
    console.log((error as Error).message)
    throw new Error(`Error al buscar al alumno ${dni}.`)
  }
}

export const fetchStudentsByCourse = async (course: string, query: string = "", currentPage: number = 1): Promise<Student[]> => {
  const token = cookies().get("token")?.value ?? ""

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {

    const student: Student[] = await fetch(`${BASE_COURSE_URL}/get/student/${course}?query=${query}&limit=${ITEMS_PER_PAGE}&offset=${offset}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(r => r.json())

    return student

  } catch (error) {
    console.log((error as Error).message)
    throw new Error(`Error al buscar alumnos en el curso ${course}.`)
  }
}

export async function createStudent(formData: FormData) {

  const token = cookies().get("token")?.value ?? ""

  const rawStudent = {
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    birth: formData.get("birth"),
    sex: formData.get("sex"),
    address: formData.get("address"),
    dni: formData.get("dni"),
    cellPhone: formData.get("cellPhone"),
    linePhone: formData.get("linePhone"),
    mail: formData.get("mail"),
    legajo: formData.get("legajo"),
    matricula: formData.get("matricula"),
    birthCert: formData.get("birthCert") === "on" ? true : false,
    studyCert: formData.get("studyCert") === "on" ? true : false,
    disability: formData.get("disability") === "on" ? true : false,
    health: formData.get("health") === "on" ? true : false,
    course_name: formData.get("course"),
  }

  try {

    await fetch(`${BASE_STUDENT_URL}/add`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rawStudent)
    }).then(r => r.json())
  } catch (error) {
    console.error((error as Error).message)
    throw new Error("Error al agregar al nuevo alumno.")
  }

  revalidatePath("/dashboard/students")
  redirect("/dashboard/students")

}

export async function updateStudent(formData: FormData, dni: string | number) {

  const token = cookies().get("token")?.value ?? ""

  const rawStudent = {
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    birth: formData.get("birth"),
    sex: formData.get("sex"),
    address: formData.get("address"),
    dni: formData.get("dni"),
    cellPhone: formData.get("cellPhone"),
    linePhone: formData.get("linePhone"),
    mail: formData.get("mail"),
    legajo: formData.get("legajo"),
    matricula: formData.get("matricula"),
    birthCert: formData.get("birthCert") === "on" ? true : false,
    studyCert: formData.get("studyCert") === "on" ? true : false,
    disability: formData.get("disability") === "on" ? true : false,
    health: formData.get("health") === "on" ? true : false,
    course_name: formData.get("course"),
  }

  try {

    await fetch(`${BASE_STUDENT_URL}/edit/${dni}`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rawStudent)
    }).then(r => r.json())
  } catch (error) {
    console.error((error as Error).message)
    throw new Error(`Error al editar al alumno ${rawStudent.name + ", " + rawStudent.lastName}.`)
  }
}

export async function deleteStudent(dni: string | number) {

  const token = cookies().get("token")?.value ?? ""

  try {
    await fetch(`${BASE_STUDENT_URL}/inactive/${dni}`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
  } catch (error) {
    console.error((error as Error).message)
    throw new Error(`Error al eliminar alumno con DNI: ${dni}.`)
  }

  revalidatePath("/dashboard/students")
}

// Pagination

export async function fetchStudentsPages(query: string = ""): Promise<number> {

  const token = cookies().get("token")?.value ?? ""

  // Only for testing
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const response = await fetch(`${BASE_STUDENT_URL}/all/pages?query=${query}`,
      {
        cache: "no-cache",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )

    const count = await response.json() as number

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Fallo al buscar el total de alumnos en el sistema.');
  }
}

export async function fetchStudentsByCoursePages(query: string = "", course: string): Promise<number> {
  const token = cookies().get("token")?.value ?? ""

  // Only for testing UI loading
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  try {
    const response = await fetch(`${BASE_COURSE_URL}/all/students/pages?query=${query}&course=${course}`,
      {
        cache: "no-cache",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )

    const count = await response.json() as number

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Fallo al buscar el total de alumnos en el sistema.');
  }
}