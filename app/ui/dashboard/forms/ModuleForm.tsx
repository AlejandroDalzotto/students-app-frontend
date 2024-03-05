"use client";

import { createModule } from '@/app/lib/actions';
import { useModalStore } from '@/stores';
import React, { useState } from 'react'
import Input from '../form-components/Input';
import { ModuleSchema } from '@/schemas';
import { toast } from 'sonner';

type ErrorField = { field: string, message: string, }

function ModuleForm() {

  const [errors, setErrors] = useState<ErrorField[]>([])

  const { closeModal } = useModalStore()

  const handleAction = async (formData: FormData) => {
    // Reset errors
    setErrors([])

    // Construct new module object
    const newModule = {
      name: formData.get("name"),
      course_name: formData.get("course_name"),
    }

    // Validate object
    const result = ModuleSchema.safeParse(newModule);

    if (!result.success) {
      setErrors(result.error.issues.map(issue => ({ field: issue.path[0].toString(), message: issue.message })));
      toast.error("Algunos datos ingresados son incorrectos.");
      return;
    }

    await createModule(result.data);
    closeModal();
  }

  return (
    <form action={handleAction}>
      <Input name="name" type="text" error={errors.find(e => e.field === "name")?.message} placeholder="Primer módulo (1er Año)" label="Nombre del módulo" required />
      <Input name="course_name" type="text" error={errors.find(e => e.field === "course_name")?.message} placeholder="Primer año" label="Nombre del curso" required />
      <button
        className="bg-green-600 text-white font-semibold text-xl transition-colors hover:bg-green-800 duration-100 py-3 px-6 rounded"
        type="submit">Aceptar</button>
    </form>
  )
}

export default ModuleForm