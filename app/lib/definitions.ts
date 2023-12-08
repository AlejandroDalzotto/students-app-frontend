type Gender = "M" | "F"

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
  code: number;
  name: string;
  lastname: string;
  birthdate: string;
  gender: Gender
  address: string;
  dni: number;
  cellPhone: number;
  linePhone: number;
  age: number;
  mail: string;
  legajo: number;
  matricula: number;
  birthCert: boolean;
  studyCert: boolean;
  course: number;
  disability: boolean;
  health: boolean;
  active: boolean;
  subjects: Subject[] | null
}