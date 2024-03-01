"use server";

import { cookies } from "next/headers";
import { BASE_EXAMS_URL } from "../constants";
import type { CompleteExamInfomation, Exam, ExamRecord } from "../definitions";

export const getAllExams = async (): Promise<Exam[]> => {

  const token = cookies().get("token")?.value ?? "";

  const response = await fetch(`${BASE_EXAMS_URL}/all`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const exams: Exam[] = await response.json();

  return exams;
}

export const getExamWithRecordsInformation = async (key: string): Promise<CompleteExamInfomation> => {
  const token = cookies().get("token")?.value ?? "";

  // For test loading fallback...
  // await new Promise((resolve) => setTimeout(resolve, 10000));

  const response = await fetch(`${BASE_EXAMS_URL}/get-with-records/${key}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    cache: "no-store"
  });

  const data: CompleteExamInfomation = await response.json();

  return data;
}

export const createExam = async (formData: FormData): Promise<Exam> => {
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

  const data: Exam = await response.json()

  return data
}

export const registerStudentToExam = async (formData: FormData): Promise<ExamRecord> => {
  const token = cookies().get("token")?.value ?? "";

  const rawInformation = {
    student_dni: formData.get("student_dni"),
    exam_key: formData.get("exam_key"),
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

  const data: ExamRecord = await response.json()

  return data
}