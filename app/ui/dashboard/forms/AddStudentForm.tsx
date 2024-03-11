"use client";

import { createStudent } from "@/app/lib/actions";
import Input, { InputCheckbox, InputRadio } from "../form-components/Input";
import CourseSelectOptions from "../form-components/CourseSelectOptions";
import { useState } from "react";
import { StudentSchema } from "@/schemas";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import SubmitButton from "../../buttons/submit-button";
import type { SimpleCourse } from "@/app/lib/definitions";

type ErrorField = { field: string, message: string, }

export default function AddStudentForm({ data }: { data: SimpleCourse[] }) {
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
      dni: formData.get("dni"),
      cellPhone: formData.get("cellPhone"),
      linePhone: formData.get("linePhone"),
      mail: formData.get("mail"),
      legajo: formData.get("legajo"),
      matricula: formData.get("matricula"),
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
      return;
    }

    const apiResult = await createStudent(result.data);

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
        <Input type="text" name="name" placeholder='Pedro' required label='Nombre' />
        <Input type="text" name="lastName" placeholder='Rodríguez' required label='Apellido' />
        <Input type="date" name="birth" label='Fec. de Nacimiento' />
        <Input type="text" name="address" label='Dirección' placeholder='Calle 123' />
        <Input type="number" name="dni" label='Documento' placeholder='40130104' required />
      </fieldset>

      <fieldset className='w-full'>
        <legend className='font-medium text-lg text-neutral-600 dark:text-white'>Contácto</legend>
        <Input type="email" name="mail" placeholder="pedro@gmail.com" required label='Email' />
        <Input type="number" name="cellPhone" label='Número de celular' placeholder='15-1234-5678' />
        <Input type="number" name="linePhone" label='Teléfono' placeholder='(011) 1234-5678' />
      </fieldset>

      <fieldset className='w-full'>
        <legend className='font-medium text-lg text-neutral-600 dark:text-white'>Información técnica</legend>
        <Input type="number" name="legajo" placeholder='1234' label='Legajo' />
        <Input type="number" name="matricula" placeholder='2023001' label='Matricula' />

        <CourseSelectOptions data={data} />
      </fieldset>

      <div className='flex flex-col w-full'>
        <fieldset>
          <legend className='font-medium text-lg text-neutral-600 dark:text-white'>Certificados y discapacidad</legend>
          <div className='w-full h-full grid grid-cols-1'>
            <InputCheckbox name='birthCert' label='Partida de nacimiento' />
            <InputCheckbox name='studyCert' label='Certificado de estudios' />
            <InputCheckbox name='health' label='Cerfiticado de buena salud' />
            <InputCheckbox name='disability' label='Discapacidad' />
          </div>
        </fieldset>
        <fieldset>
          <legend className='font-medium text-lg text-neutral-600 dark:text-white'>Sexo</legend>
          <InputRadio value='M' name='sex' defaultChecked label='Masculino' />
          <InputRadio value='F' name='sex' label='Femenino' />
          <InputRadio value='O' name='sex' label='Otro' />
        </fieldset>
      </div>
      <div className="absolute bottom-5 right-5">
        <SubmitButton color="green">
          Guardar
        </SubmitButton>
      </div>
    </form>
  )
}
