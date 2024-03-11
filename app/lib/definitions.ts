import type { CourseSchema, LoginSchema, RegisterSchema, StudentSchema } from "@/schemas"
import { ExamRecordSchema } from "@/schemas/exam.schemas"
import { SubjectSchema } from "@/schemas/subject.schemas"
import { z } from "zod"

export type RowData = Pick<Student, "name" | "lastName" | "birth" | "address" | "dni" | "legajo" | "matricula">

type Gender = "M" | "F" | "O"

type Authority = {
  authority: string
}

export interface User {
  token: string,
  username: string,
  authorities: Authority[]
}

export type UserSignIn = z.infer<typeof LoginSchema>

export type UserSignUp = z.infer<typeof RegisterSchema>

export interface SimpleCourse {
  course_name: string;
  count_subjects: number;
  last_subjects_record: SimpleSubject[];
  count_students: number;
}

export interface Course {
  name: string;
  subjects: Subject[]
}

export type CourseRequest = z.infer<typeof CourseSchema>

export interface SimpleSubject {
  subject_name: string;
  count_students: number;
}

export interface Subject {
  name: string;
  students: Student[]
  module_name: string
}

export type SubjectRequest = z.infer<typeof SubjectSchema>

export interface Student {
  name: string;
  lastName: string;
  birth: string;
  sex: Gender;
  address: string;
  dni: number;
  cellPhone?: number;
  linePhone?: number;
  mail: string;
  legajo: number;
  matricula: number;
  birthCert: boolean;
  studyCert: boolean;
  course: string;
  disability: boolean;
  health: boolean
}

export interface AcademicRecord {
  student_name: string;
  course_name: string;
  study_year: number;
  unique_code: string;
  academic_state: string;
  comment?: string | null
}

export type StudentRequest = z.infer<typeof StudentSchema>

export interface Grade {
  grade: number;
  student: string;
  subject: string;
}

export interface Exam {
  key: string;
  subject: string;
  module: string;
  date: string;
}

export interface ExamRecord {
  student_name: string;
  exam_key: string;
  subject: string;
  state: string | null;
  attended: boolean;
  grade: number;
}

export type ExamRecordRequest = z.infer<typeof ExamRecordSchema>

export interface Module {
  name: string;
  course_name: string;
}

export interface DefaultError {
  message: string;
  reason?: string;
  status: number;
  redirectTo: string;
}

export interface ApiResponse<T> {
  status: number;
  message: string;
  success: boolean;
  data: T
}