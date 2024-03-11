import { useState } from "react";
import Input, { InputCheckbox } from "../form-components/Input";
import { useModalStore } from "@/stores";
import { registerStudentToExam } from "@/app/lib/actions";
import SubmitButton from "../../buttons/submit-button";
import { toast } from "sonner";
import { ExamRecordSchema } from "@/schemas/exam.schemas";

type ErrorField = { field: string, message: string, }

export default function RegisterStudentToExamForm({ examKey }: { examKey: string }) {

  const [errors, setErrors] = useState<ErrorField[]>([])

  const { closeModal } = useModalStore()

  const handleAction = async (formData: FormData) => {
    // Reset errors
    setErrors([])

    // Construct new information object
    const rawInformation = {
      student_dni: Number(formData.get("student_dni")),
      exam_key: examKey,
      grade: Number(formData.get("grade")),
      state: formData.get("state"),
      attended: formData.get("attended") === "on" ? true : false,
    }

    // Validate object
    const result = ExamRecordSchema.safeParse(rawInformation);

    if (!result.success) {
      setErrors(result.error.issues.map(issue => ({ field: issue.path[0].toString(), message: issue.message })));
      toast.error("Algunos datos ingresados son incorrectos.");
      return;
    }


    const apiResult = await registerStudentToExam(result.data);
    if (apiResult.success) {
      toast.success(apiResult.message)
      closeModal();

      return;
    }

    toast.error(apiResult.message)
  }

  return (
    <form action={handleAction}>
      <fieldset>
        <legend className='font-medium text-lg text-neutral-600 dark:text-white'>Información principal</legend>
        <Input name="student_dni" type="number" placeholder="49199199" label="DNI del alumno" required />
        <Input name="grade" type="text" pattern='[0-9]+([\.,][0-9]+)?' placeholder="7, 10, 9.5, 0" label="Nota del alumno" required />
      </fieldset>

      <fieldset>
        <legend className='font-medium text-lg text-neutral-600 dark:text-white mb-5'>Información extra</legend>
        <div className="inline-block relative w-full mb-5">
          <select required defaultValue={""} name="state" id='select-state-student' className="block appearance-none w-full bg-transparent border border-neutral-400 hover:border-neutral-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="" disabled>Selecciona el estado del alumno</option>
            <option className="text-neutral-900" value={"Regular"}>Regular</option>
            <option className="text-neutral-900" value={"Aprobado"}>Aprobado</option>
            <option className="text-neutral-900" value={"Desaprobado"}>Desaprobado</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-700 dark:text-neutral-100">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
          </div>
        </div>

        <div className='w-full h-full grid grid-cols-1'>
          <InputCheckbox name='attended' label='El alumno se presentó' />
        </div>
      </fieldset>

      <SubmitButton color="green">
        Aceptar
      </SubmitButton>
    </form>
  )
}
