"use server";

import { cookies } from "next/headers";
import { BASE_EXAMS_URL } from "../constants";
import type { ApiResponse, CompleteExamInfomation, Exam, ExamRecord } from "../definitions";
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

export const getExamWithRecordsInformation = async (key: string) => {
  const token = cookies().get("token")?.value ?? "";

  const response = await fetch(`${BASE_EXAMS_URL}/get-with-records/${key}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data: ApiResponse<CompleteExamInfomation> = await response.json();

  return data;
}

export const createExam = async (formData: FormData) => {
  const token = cookies().get("token")?.value ?? "";

  const rawExam = {
    key: formData.get("key"),
    subject: formData.get("subject"),
    date: formData.get("date"),
    records: [],
    module: formData.get("module")
  }

  const response = await fetch(`${BASE_EXAMS_URL}/save-exam`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': "application/json"
    },
    method: "POST",
    body: JSON.stringify(rawExam)
  })

  const data: ApiResponse<Exam> = await response.json()

  revalidatePath("/dashboard/exams")

  return data
}

export const registerStudentToExam = async (formData: FormData, examKey: string) => {
  const token = cookies().get("token")?.value ?? "";

  const rawInformation = {
    student_dni: formData.get("student_dni"),
    exam_key: examKey,
    grade: formData.get("grade"),
    state: formData.get("state"),
    attended: formData.get("attended") === "on" ? true : false,
  }

  const response = await fetch(`${BASE_EXAMS_URL}/register-student`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': "application/json"
    },
    method: "POST",
    body: JSON.stringify(rawInformation)
  });

  const data: ApiResponse<ExamRecord> = await response.json()

  revalidatePath("/dashboard/exams/[key]", "page")

  return data
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