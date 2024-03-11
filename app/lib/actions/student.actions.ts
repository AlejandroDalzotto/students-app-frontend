"use server";

import { revalidatePath } from "next/cache";
import { BASE_COURSE_URL, BASE_STUDENT_URL, ITEMS_PER_PAGE } from "../constants";
import { cookies } from "next/headers";
import type { ApiResponse, PromoteStudentRequest, Student, StudentRequest } from "../definitions";
import { redirect } from "next/navigation";

export async function fetchFilteredStudents(query: string = "", currentPage: number = 1) {

  const token = cookies().get("token")?.value ?? ""

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const students: ApiResponse<Student[]> = await fetch(`${BASE_STUDENT_URL}/all/filter?query=${query}&limit=${ITEMS_PER_PAGE}&offset=${offset}`, {
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

    const student: ApiResponse<Student> = await fetch(`${BASE_STUDENT_URL}/get/dni/${dni}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(r => r.json())

    return student

  } catch (error) {
    throw new Error(`Error al buscar al alumno ${dni}.`)
  }
}

export const fetchStudentsByCourse = async (course: string, query: string = "", currentPage: number = 1) => {
  const token = cookies().get("token")?.value ?? ""

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {

    const student: ApiResponse<Student[]> = await fetch(`${BASE_COURSE_URL}/get/student/${course}?query=${query}&limit=${ITEMS_PER_PAGE}&offset=${offset}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(r => r.json())

    return student

  } catch (error) {
    throw new Error(`Error al buscar alumnos en el curso ${course}.`)
  }
}

export async function createStudent(newEntry: StudentRequest) {

  const token = cookies().get("token")?.value ?? ""

  try {

    const { success, message }: ApiResponse<Student> = await fetch(`${BASE_STUDENT_URL}/add`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry)

    }).then(r => r.json())

    if (success === false) {
      return { success, message }
    }

    revalidatePath("/dashboard/students")
    return { success, message }

  } catch (error) {
    console.error((error as Error).message)
    throw new Error("Error al agregar al nuevo alumno.")
  }

}

export async function updateStudent(newEntry: StudentRequest, dni: string | number) {

  const token = cookies().get("token")?.value ?? ""

  try {

    const { success, message }: ApiResponse<Student> = await fetch(`${BASE_STUDENT_URL}/edit/${dni}`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry)
    }).then(r => r.json())

    if (success === false) {
      return { success, message }
    }

    revalidatePath("/dashboard/students")
    return { success, message }


  } catch (error) {
    console.error({ error, redirectTo: "/dashboard" })
    redirect("/dashboard")
  }
}

export const promoteStudent = async (newEntry: PromoteStudentRequest) => {
  const token = cookies().get("token")?.value ?? ""

  try {

    const { success, message }: ApiResponse<Student> = await fetch(`${BASE_COURSE_URL}/promote-student`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry)
    }).then(r => r.json())

    if (success === false) {
      return { success, message }
    }

    revalidatePath("/dashboard/students")
    return { success, message }

  } catch (error) {
    console.error({ error, redirectTo: "/dashboard" })
    redirect("/dashboard")
  }
}

export async function deleteStudent(dni: string | number) {

  const token = cookies().get("token")?.value ?? ""

  try {
    const data: ApiResponse<Student> = await fetch(`${BASE_STUDENT_URL}/inactive/${dni}`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then(r => r.json())
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