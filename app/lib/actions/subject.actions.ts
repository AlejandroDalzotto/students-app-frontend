"use server";

import { cookies } from "next/headers";
import { BASE_SUBJECT_URL } from "../constants";
import type { ApiResponse, Subject, SubjectRequest } from "../definitions";
import { revalidatePath } from "next/cache";

export const getSubjects = async (): Promise<Subject[]> => {

  const token = cookies().get("token")?.value ?? ""

  const response = await fetch(`${BASE_SUBJECT_URL}/active`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const data: Subject[] = await response.json()

  return data
}

export const createSubject = async (newEntry: SubjectRequest) => {

  const token = cookies().get("token")?.value ?? ""

  const response = await fetch(`${BASE_SUBJECT_URL}/add`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': "application/json",
    },
    method: "POST",
    body: JSON.stringify(newEntry)
  })

  const { success, message }: ApiResponse<Subject> = await response.json()
  revalidatePath("/dashboard/subjects")

  return { success, message }
}