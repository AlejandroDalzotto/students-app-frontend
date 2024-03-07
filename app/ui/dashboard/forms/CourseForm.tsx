import { createCourse } from '@/app/lib/actions';
import { useModalStore } from '@/stores';
import { useState } from 'react'
import Input from '@/app/ui/dashboard/form-components/Input';
import { toast } from 'sonner';
import { CourseSchema } from '@/schemas';
import SubmitButton from '../../buttons/submit-button';

type ErrorField = { field: string, message: string, }

export default function CourseForm() {

  const [errors, setErrors] = useState<ErrorField[]>([])

  const { closeModal } = useModalStore()

  const handleAction = async (formData: FormData) => {
    // Reset errors
    setErrors([])

    // Construct new module object
    const newCourse = {
      name: formData.get("name"),
    }

    // Validate object
    const result = CourseSchema.safeParse(newCourse);

    if (!result.success) {
      setErrors(result.error.issues.map(issue => ({ field: issue.path[0].toString(), message: issue.message })));
      toast.error("Algunos datos ingresados son incorrectos.");
      return;
    }

    const apiResult = await createCourse(result.data);

    if (apiResult.success) {
      toast.success(apiResult.message)
      closeModal();
      return;
    }

    toast.error(apiResult.message)
  }

  return (
    <form action={handleAction}>
      <Input name="name" type="text" error={errors.find(v => v.field === "name")?.message} placeholder="Primer año" label="Nombre del curso" required />

      <SubmitButton color='green'>
        Aceptar
      </SubmitButton>
    </form>
  )
}
