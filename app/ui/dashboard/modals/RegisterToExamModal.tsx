"use client";
import { registerStudentToExam } from '@/app/lib/actions/exams.actions';
import { useModalStore } from '@/stores';
import Input, { InputCheckbox } from '../form-components/Input';
import { usePathname } from 'next/navigation';

export default function RegisterToExamModal() {

  const { closeModal } = useModalStore()
  const pathname = usePathname()
  const examKey = decodeURIComponent(pathname.split("/").at(-1) ?? "")

  return (
    <div onClick={closeModal} className="inset-1 bg-black/30 flex items-center justify-center backdrop-blur-sm fixed z-30">
      <section onClick={(e) => e.stopPropagation()} className="w-[90%] p-4 max-w-2xl rounded bg-neutral-100 dark:bg-neutral-900">
        <header className="flex justify-between items-center mb-5">
          <h3 className="text-2xl dark:text-neutral-400 font-bold">Anotar a examen</h3>
          <button
            onClick={closeModal}
            className="transition-transform hover:scale-125 active:scale-90"
          >
            <svg className='w-8 h-8'>
              <use xlinkHref='/sprites.svg#close'></use>
            </svg>
          </button>
        </header>

        <article>
          <form action={(d) => {
            registerStudentToExam(d, examKey);
            closeModal();
          }}>
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
                <InputCheckbox name='state' label='El alumno se presentó' />
              </div>
            </fieldset>

            <button
              className="bg-green-600 text-white font-semibold mt-5 text-xl transition-colors hover:bg-green-800 duration-100 py-3 px-6 rounded"
              type="submit"
            >
              Aceptar
            </button>
          </form>
        </article>
      </section>
    </div>
  )
}
