"use server";

import { cookies } from "next/headers";
import { BASE_SUBJECT_URL } from "../constants";
import type { Subject } from "../definitions";

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