"use server"

import type { Student, User } from "./definitions"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { calculateAge } from "./utils"

const BASE_AUTH_URL = "http://localhost:8080/auth"
const BASE_STUDENT_URL = "http://localhost:8080/api/student"

// Auth actions

export async function login(formData: FormData) {
  try {
    const rawFormData = {
      username: formData.get("username"),
      password: formData.get("password"),
    }

    const user = await fetch(`${BASE_AUTH_URL}/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: rawFormData.username, password: rawFormData.password })
    }).then(response => response.json()) as User
    cookies().set("token", user.token)
    cookies().set("username", user.username)
  } catch (error) {
    console.error((error as Error).message)
    throw new Error("Error al iniciar sesión")
  }

  redirect("/dashboard")

}

// Student actions

export async function fetchFilteredStudents(query: string = "", limit: number = 10, offset: number = 0) {

  const token = cookies().get("token")?.value ?? ""

  try {
    const students: Student[] = await fetch(`${BASE_STUDENT_URL}/all/filter?query=${query}&limit=${limit}&offset=${offset}`, {
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

export async function updateStudent(formData: FormData) {

}

export async function deleteStudent(id: string | number) {

  try {

  } catch (error) {
    console.error((error as Error).message)
    throw new Error(`Error al eliminar alumno ${id}.`)
  }
}