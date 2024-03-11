import React, { useState } from 'react'
import Input from '../form-components/Input'
import SubmitButton from '../../buttons/submit-button'
import { useModalStore } from '@/stores'
import { toast } from 'sonner'
import { PromoteStudentSchema } from '@/schemas'
import { promoteStudent } from '@/app/lib/actions'
import AcademicStateOptions from '../form-components/AcademicStateOptions'
import { useSearchParams } from 'next/navigation'

type ErrorField = { field: string, message: string, }

export default function PromoteStudentForm() {

  const [errors, setErrors] = useState<ErrorField[]>([])

  const searchParams = useSearchParams()
  const sid = searchParams.get("sid")

  const handleAction = async (formData: FormData) => {

    // Reset errors
    setErrors([])

    // Construct new object
    const rawPromoteObject = {
      student_dni: Number(sid),
      new_course: formData.get("course"),
      study_year: Number(formData.get("year")),
      comment: formData.get("comment"),
      state: formData.get("state"),
    }

    // Validate object
    const result = PromoteStudentSchema.safeParse(rawPromoteObject);

    if (!result.success) {
      setErrors(result.error.issues.map(issue => ({ field: issue.path[0].toString(), message: issue.message })));
      toast.error("Algunos datos ingresados son incorrectos.");
      return;
    }

    const apiResult = await promoteStudent(result.data);

    if (apiResult.success) {
      toast.success(apiResult.message)
      closeModal();

      return;
    }

    toast.error(apiResult.message)
  }

  const { closeModal } = useModalStore()

  return (
    <form action={handleAction}>
      <Input error={errors.find(v => v.field === "course")?.message} name="course" type="text" placeholder="Primer año" label="Nombre del nuevo curso" required />
      <Input error={errors.find(v => v.field === "year")?.message} name="year" type="number" placeholder="2020" label="Año en el que se completó" required />
      <Input error={errors.find(v => v.field === "comment")?.message} name="comment" type="text" label="Observaciones (Opcional)" placeholder='Comentarios adicionales...' required />
      <div className='mb-6'>
        <AcademicStateOptions />
      </div>

      <SubmitButton color='green'>
        Aceptar
      </SubmitButton>
    </form>
  )
}
