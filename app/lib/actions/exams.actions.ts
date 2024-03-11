"use server";

import { cookies } from "next/headers";
import { BASE_EXAMS_URL, ITEMS_PER_PAGE } from "../constants";
import type { ApiResponse, Exam, ExamRecord, ExamRecordRequest, ExamRequest } from "../definitions";
import { revalidatePath } from "next/cache";

export const getAllExams = async (query: string = "", currentPage: number = 1) => {

  const token = cookies().get("token")?.value ?? "";
  const offset = (currentPage - 1) * 6;

  const response = await fetch(`${BASE_EXAMS_URL}/all-by-filter?term=${query}&limit=${6}&offset=${offset}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const exams: ApiResponse<Exam[]> = await response.json();

  return exams;
}

export const getExamByKey = async (key: string) => {
  const token = cookies().get("token")?.value ?? "";

  const response = await fetch(`${BASE_EXAMS_URL}/get/${key}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data: ApiResponse<Exam> = await response.json();

  return data;
}

export const getRecords = async (key: string = "") => {
  const token = cookies().get("token")?.value ?? "";

  const response = await fetch(`${BASE_EXAMS_URL}/get-records/${key}?limit=${ITEMS_PER_PAGE}&offset=0`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });

  const data: ApiResponse<ExamRecord[]> = await response.json();

  return data;
}

export const createExam = async (newEntry: ExamRequest) => {
  const token = cookies().get("token")?.value ?? "";

  const response = await fetch(`${BASE_EXAMS_URL}/save-exam`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': "application/json"
    },
    method: "POST",
    body: JSON.stringify(newEntry)
  })

  const { message, success }: ApiResponse<Exam> = await response.json()

  if (success === false) {
    return { success, message }
  }

  revalidatePath("/dashboard/exams")
  return { success, message }
}

export const registerStudentToExam = async (newEntry: ExamRecordRequest) => {
  const token = cookies().get("token")?.value ?? "";

  const response = await fetch(`${BASE_EXAMS_URL}/register-student`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': "application/json"
    },
    method: "POST",
    body: JSON.stringify(newEntry)
  });

  const { message, success }: ApiResponse<ExamRecord> = await response.json()

  if (success === false) {
    return { success, message }
  }

  revalidatePath("/dashboard/exams/[key]", "page")
  return { success, message }
}

// For pagination...

export const fetchExamsPages = async (query: string = ""): Promise<number> => {

  const token = cookies().get("token")?.value ?? ""

  // Only for testing UI loading
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  try {
    const response = await fetch(`${BASE_EXAMS_URL}/all/pages?query=${query}`,
      {
        cache: "no-cache",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )

    const count = await response.json() as number

    const totalPages = Math.ceil(count / 6);

    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Fallo al buscar el total de cursos.');
  }

}