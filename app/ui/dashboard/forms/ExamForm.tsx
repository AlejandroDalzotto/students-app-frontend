import React, { useState } from 'react'
import Input from '../form-components/Input';
import SubmitButton from '../../buttons/submit-button';
import { useModalStore } from '@/stores';
import { createExam } from '@/app/lib/actions';
import { ExamSchema } from '@/schemas/exam.schemas';
import { toast } from 'sonner';

type ErrorField = { field: string, message: string, }

export default function ExamForm() {

  const [errors, setErrors] = useState<ErrorField[]>([])

  const handleAction = async (formData: FormData) => {

    // Reset errors
    setErrors([])

    // Construct new exam object
    const rawExam = {
      key: formData.get("key"),
      subject: formData.get("subject"),
      date: formData.get("date"),
      records: [],
      module: formData.get("module")
    }

    // Validate object
    const result = ExamSchema.safeParse(rawExam);

    if (!result.success) {
      setErrors(result.error.issues.map(issue => ({ field: issue.path[0].toString(), message: issue.message })));
      toast.error("Algunos datos ingresados son incorrectos.");
      return;
    }

    const apiResult = await createExam(result.data);

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
      <Input error={errors.find(v => v.field === "key")?.message} name="key" type="text" placeholder="Examen lengua 2023..." label="Nombre del examen" required />
      <Input error={errors.find(v => v.field === "subject")?.message} name="subject" type="text" placeholder="Matemática" label="Nombre de la materia" required />
      <Input error={errors.find(v => v.field === "module")?.message} name="module" type="text" placeholder="Primer modulo (1er año)" label="Nombre del modulo" required />
      <Input error={errors.find(v => v.field === "date")?.message} name="date" type="date" label="Fecha del Examen" required />

      <SubmitButton color='green'>
        Aceptar
      </SubmitButton>
    </form>
  )
}
