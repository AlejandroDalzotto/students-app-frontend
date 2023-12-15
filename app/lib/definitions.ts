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
  course: number,
  disability: boolean,
  health: boolean,
  active: boolean
}

export type StudentFromForm = Omit<Student, "id_student" | "age" | "active">