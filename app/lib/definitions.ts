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

export interface UserSignIn {
  username: string,
  password: string
}

export interface UserSignUp extends UserSignIn {
  email: string,
  name: string,
  lastname: string
}

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

export interface CourseRequest {
  name: string;
}

export interface SimpleSubject {
  subject_name: string;
  count_students: number;
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
  course: string;
  disability: boolean;
  health: boolean
}

export type StudentRequest = Omit<Student, "id_student" | "age" | "active">

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

export interface CompleteExamInfomation extends Exam {
  records: ExamRecord[]
}

export interface Module {
  name: string;
  course_name: string;
  start: string;
  finish: string;
}

export interface DefaultError {
  message: string;
  reason?: string;
  status: number;
  redirectTo: string;
}