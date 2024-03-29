"use client";

import { createSubject } from '@/app/lib/actions';
import { useModalStore } from '@/stores';
import { useState } from 'react'
import Input from '@/app/ui/dashboard/form-components/Input';
import { toast } from 'sonner';
import SubmitButton from '../../buttons/submit-button';
import { SubjectSchema } from '@/schemas/subject.schemas';

type ErrorField = { field: string, message: string, }

export default function SubjectForm() {

  const [errors, setErrors] = useState<ErrorField[]>([])

  const { closeModal } = useModalStore()

  const handleAction = async (formData: FormData) => {
    // Reset errors
    setErrors([])


    // Construct new subject object
    const newSubject = {
      name: formData.get("name"),
      course_name: formData.get("course"),
    }

    // Validate object
    const result = SubjectSchema.safeParse(newSubject);

    if (!result.success) {
      setErrors(result.error.issues.map(issue => ({ field: issue.path[0].toString(), message: issue.message })));
      toast.error("Algunos datos ingresados son incorrectos.");
      return;
    }

    const apiResult = await createSubject(result.data);

    if (apiResult.success) {
      toast.success(apiResult.message)
      closeModal();

      return;
    }

    toast.error(apiResult.message)
  }

  return (
    <form action={handleAction}>
      <Input name="name" type="text" error={errors.find(v => v.field === "name")?.message} placeholder="Matemáticas I" label="Nombre de la materia" required />
      <Input name="course" type="text" error={errors.find(v => v.field === "course_name")?.message} placeholder="Primer Año..." label="Nombre del curso" required />

      <SubmitButton color='green'>
        Aceptar
      </SubmitButton>
    </form>
  )
}
