import { getSimpleCourses } from '@/app/lib/actions'
import { fetchStudentByDni, updateStudent } from '@/app/lib/actions/student.actions'
import { APP_NAME } from '@/app/lib/constants'
import CourseSelectOptions from '@/app/ui/dashboard/form-components/CourseSelectOptions'
import Input, { InputCheckbox, InputRadio } from '@/app/ui/dashboard/form-components/Input'
import EditStudentForm from '@/app/ui/dashboard/forms/EditStudentForm'
import { type Metadata } from 'next'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
  title: `Añadir un nuevo alumno | ${APP_NAME}`,
  description: `Aquí puede agregar un nuevo alumno al sistema. Los cambios se veran reflejados cuando des al botón de guardar.`
}

export default async function AddStudentPage({
  searchParams
}: {
  searchParams: {
    sid: string | null
  }
}) {

  const { sid } = searchParams

  if (!sid) {
    redirect("/dashboard/")
  }

  const { data: student, success } = await fetchStudentByDni(sid)

  if (success === false) {
    return redirect("/dashboard/")
  }

  const { data: availableCourses } = await getSimpleCourses()

  return (
    <section className='w-full relative h-full row-[span_2/span_-1] p-6 rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Editar información de alumno</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>Completa los espacios con la información que desees eliminar y al hacer clic en <strong className='text-green-600'>guardar</strong>, volverás a la lista de alumnos para ver los cambios reflejados en la tabla.</p>
      </header>
      <section className='flex justify-start h-full'>
        <EditStudentForm availableCourses={availableCourses} data={student} sid={sid} />
      </section>
    </section>
  )
}
