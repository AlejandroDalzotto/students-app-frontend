export type RowData = Pick<Student, "id_student" | "name" | "lastName" | "birth" | "address" | "dni" | "legajo">

interface Authority {
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
  active: boolean;
  subjects: Subject[]
}

export interface Subject {
  name: string;
  active: boolean;
  students: Student[]
  id_module: Module
}

export interface Student {
  id_student: number,
  name: string,
  lastName: string,
  birth: string,
  sex: string,
  address: string,
  dni: number,
  cellPhone?: number,
  linePhone?: number,
  age: number,
  mail: string,
  legajo: number,
  matricula: number,
  birthCert: boolean,
  studyCert: boolean,
  course: CourseId,
  disability: boolean,
  health: boolean,
  active: boolean
}

export type StudentFromForm = Omit<Student, "id_student" | "age" | "active">