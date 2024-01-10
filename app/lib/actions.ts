"use server"

import type { Student } from "./definitions"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { calculateAge } from "./utils"
import { BASE_AUTH_URL, BASE_STUDENT_URL } from "./constants"
import { signIn, signOut } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { z } from "zod"
import { LoginSchema, RegisterSchema } from "@/schemas"
import { AuthError } from "next-auth"

const ITEMS_PER_PAGE = 10

// Auth actions

export async function login(formData: FormData) {

  const rawUser = {
    username: formData.get("username"),
    password: formData.get("password"),
  }

  const validatedFields = LoginSchema.safeParse(rawUser);
  if (!validatedFields.success) {
    return { error: "Algunos campos son incorrectos!" };
  }

  const { username, password } = validatedFields.data

  try {
    await signIn("credentials", { username, password, redirectTo: DEFAULT_LOGIN_REDIRECT })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Credenciales incorrectas!" }
        default:
          return { error: "Algo a ido mal!" }
      }
    }

    throw error;
  }

}

export async function logout() {

  cookies().delete("username")
  cookies().delete("token")

  await signOut({ redirectTo: "/" });
}

export async function register(formData: FormData) {

  const rawUser = {
    name: formData.get("name"),
    lastname: formData.get("lastname"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  }

  const validatedFields = RegisterSchema.safeParse(rawUser);
  if (!validatedFields.success) {
    return { error: "Algunos campos son incorrectos!" };
  }

  const { username, password, email, lastname, name } = validatedFields.data

  try {

    await fetch(`${BASE_AUTH_URL}/register`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ username, password, email, lastname, name }),
    })

  } catch (error) {
    console.error({ error })
    throw error;
  }

  redirect("/signin")
}

// Student actions

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

export async function fetchStudentById(id: number | string) {

  const token = cookies().get("token")?.value ?? ""

  try {

    const student: Student = await fetch(`${BASE_STUDENT_URL}/get/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(r => r.json())

    return student

  } catch (error) {
    console.log((error as Error).message)
    throw new Error(`Error al buscar al alumno ${id}.`)
  }
}

export async function createStudent(formData: FormData) {

  const token = cookies().get("token")?.value ?? ""

  const studentAge = calculateAge(formData.get("birth")?.toString())

  const rawStudent = {
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    birth: formData.get("birth"),
    sex: formData.get("sex"),
    address: formData.get("address"),
    dni: formData.get("dni"),
    cellPhone: formData.get("cellPhone"),
    linePhone: formData.get("linePhone"),
    age: studentAge,
    mail: formData.get("mail"),
    legajo: formData.get("legajo"),
    matricula: formData.get("matricula"),
    birthCert: formData.get("birthCert") === "on" ? true : false,
    studyCert: formData.get("studyCert") === "on" ? true : false,
    disability: formData.get("disability") === "on" ? true : false,
    health: formData.get("health") === "on" ? true : false,
    course: formData.get("course"),
    active: true,
    subjects: [],
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

export async function updateStudent(formData: FormData, id: string | number) {

  const token = cookies().get("token")?.value ?? ""

  const studentAge = calculateAge(formData.get("birth")?.toString())

  const rawStudent = {
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    birth: formData.get("birth"),
    sex: formData.get("sex"),
    address: formData.get("address"),
    dni: formData.get("dni"),
    cellPhone: formData.get("cellPhone"),
    linePhone: formData.get("linePhone"),
    age: studentAge,
    mail: formData.get("mail"),
    legajo: formData.get("legajo"),
    matricula: formData.get("matricula"),
    birthCert: formData.get("birthCert") === "on" ? true : false,
    studyCert: formData.get("studyCert") === "on" ? true : false,
    disability: formData.get("disability") === "on" ? true : false,
    health: formData.get("health") === "on" ? true : false,
    course: formData.get("course"),
    active: true,
    subjects: [],
  }

  try {

    await fetch(`${BASE_STUDENT_URL}/edit/${id}`, {
      method: "PUT",
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
}

export async function deleteStudent(id: string | number) {

  const token = cookies().get("token")?.value ?? ""

  try {
    await fetch(`${BASE_STUDENT_URL}/inactive/${id}`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
  } catch (error) {
    console.error((error as Error).message)
    throw new Error(`Error al eliminar alumno ${id}.`)
  }

  revalidatePath("/dashboard/students")
}

// Pagination

export async function fetchStudentsPages(query: string = ""): Promise<number> {

  const token = cookies().get("token")?.value ?? ""

  try {
    const response = await fetch(`${BASE_STUDENT_URL}/all/pages?query=${query}`,
      {
        cache: "no-store",
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
    throw new Error('Failed to fetch total number of invoices.');
  }
}