export type RowData = Pick<Student, "name" | "lastName" | "birth" | "address" | "dni" | "legajo">

type Gender = "M" | "F" | "O"

type Authority = {
  authority: string
}

export interface User {
  token: string,
  username: string,
  authorities: Authority[]
}

export interface UserSignIn {
  username: string,
  password: string
}

export interface UserSignUp extends UserSignIn {
  email: string,
  name: string,
  lastname: string
}

export type CourseId = 1 | 2 | 3 | 4 | 5

export interface Module {
  name: string;
  subjects: Subject[]
}

export interface Subject {
  name: string;
  students: Student[]
  module_name: string
}

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
  course: CourseId;
  disability: boolean;
  health: boolean
}

export type StudentRequest = Omit<Student, "id_student" | "age" | "active">

export interface Grade {
  grade: number;
  student: string;
  subject: string;
}