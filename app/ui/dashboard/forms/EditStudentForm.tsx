"use client";

import type { SimpleCourse, Student } from "@/app/lib/definitions";
import CourseSelectOptions from "../form-components/CourseSelectOptions";
import Input, { InputCheckbox, InputRadio } from "../form-components/Input";
import { updateStudent } from "@/app/lib/actions";
import { useState } from "react";
import { StudentSchema } from "@/schemas";
import { toast } from "sonner";
import { redirect } from "next/navigation";

type ErrorField = { field: string, message: string, }

export default function EditStudentForm({
  data: student,
  sid,
  availableCourses
}: {
  data: Student,
  sid: string,
  availableCourses: SimpleCourse[]
}) {

  const [errors, setErrors] = useState<ErrorField[]>([])

  const handleAction = async (formData: FormData) => {
    // Reset errors
    setErrors([])

    // Construct new student object
    const rawStudent = {
      name: formData.get("name"),
      lastName: formData.get("lastName"),
      birth: formData.get("birth"),
      sex: formData.get("sex"),
      address: formData.get("address"),
      dni: Number(formData.get("dni")),
      cellPhone: Number(formData.get("cellPhone")) || null,
      linePhone: Number(formData.get("linePhone")) || null,
      mail: formData.get("mail"),
      legajo: Number(formData.get("legajo")) || null,
      matricula: Number(formData.get("matricula")),
      birthCert: formData.get("birthCert") === "on" ? true : false,
      studyCert: formData.get("studyCert") === "on" ? true : false,
      disability: formData.get("disability") === "on" ? true : false,
      health: formData.get("health") === "on" ? true : false,
      course_name: formData.get("course"),
    }

    // Validate object
    const result = StudentSchema.safeParse(rawStudent);

    if (!result.success) {
      setErrors(result.error.issues.map(issue => ({ field: issue.path[0].toString(), message: issue.message })));
      toast.error("Algunos datos ingresados son incorrectos.");
      console.log({ errors })
      return;
    }


    const apiResult = await updateStudent(result.data, sid)

    if (apiResult.success) {
      toast.success(apiResult.message)
      redirect("/dashboard/students")
    }

    toast.error(apiResult.message)
  }

  return (
    <form action={handleAction} className='flex gap-x-10 h-full relative bg-black/5 w-full items-start p-2'>
      <fieldset className='w-full'>
        <legend className='font-medium text-lg text-neutral-600 dark:text-white'>Información personal</legend>
        <Input defaultValue={student.name} type="text" name="name" placeholder='Pedro' required label='Nombre' />
        <Input defaultValue={student.lastName} type="text" name="lastName" placeholder='Rodríguez' required label='Apellido' />
        <Input defaultValue={student.birth} type="date" name="birth" label='Fec. de Nacimiento' />
        <Input defaultValue={student.address} type="text" name="address" label='Dirección' placeholder='Calle 123' />
        <Input defaultValue={student.dni} type="number" name="dni" label='Documento' placeholder='40130104' required />
      </fieldset>

      <fieldset className='w-full'>
        <legend className='font-medium text-lg text-neutral-600 dark:text-white'>Contácto</legend>
        <Input defaultValue={student.mail} type="email" name="mail" placeholder="pedro@gmail.com" required label='Email' />
        <Input defaultValue={student.cellPhone ?? ""} type="number" name="cellPhone" label='Número de celular' placeholder='15-1234-5678' />
        <Input defaultValue={student.linePhone ?? ""} type="number" name="linePhone" label='Teléfono' placeholder='(011) 1234-5678' />
      </fieldset>

      <fieldset className='w-full'>
        <legend className='font-medium text-lg text-neutral-600 dark:text-white'>Información técnica</legend>
        <Input defaultValue={student.legajo} type="number" name="legajo" placeholder='1234' label='Legajo' />
        <Input defaultValue={student.matricula} type="number" name="matricula" placeholder='2023001' label='Matricula' />

        <CourseSelectOptions data={availableCourses} defaultValue={student.course} />
      </fieldset>

      <div className='flex flex-col w-full'>
        <fieldset>
          <legend className='font-medium text-lg text-neutral-600 dark:text-white'>Certificados y discapacidad</legend>
          <div className='w-full h-full grid grid-cols-1'>
            <InputCheckbox checked={student.birthCert} name='birthCert' label='Partida de nacimiento' />
            <InputCheckbox checked={student.studyCert} name='studyCert' label='Certificado de estudios' />
            <InputCheckbox checked={student.health} name='health' label='Cerfiticado de buena salud' />
            <InputCheckbox checked={student.disability} name='disability' label='Discapacidad' />
          </div>
        </fieldset>
        <fieldset>
          <legend className='font-medium text-lg text-neutral-600 dark:text-white'>Sexo</legend>
          <InputRadio value='M' name='sex' defaultChecked={student.sex.toUpperCase() === 'M'} label='Masculino' />
          <InputRadio value='F' name='sex' defaultChecked={student.sex.toUpperCase() === 'F'} label='Femenino' />
          <InputRadio value='O' name='sex' defaultChecked={student.sex.toUpperCase() === 'O'} label='Otro' />
        </fieldset>
      </div>
      <button type='submit' className='absolute bottom-5 right-5 py-3 px-5 rounded-lg text-xl font-medium bg-blue-500 text-white transition-all hover:bg-blue-700 active:shadow-inner active:scale-95'>Guardar</button>
    </form>
  )
}
