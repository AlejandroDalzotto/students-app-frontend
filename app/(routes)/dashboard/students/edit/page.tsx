import { fetchStudentById, updateStudent } from '@/app/lib/actions/student.actions'
import { APP_NAME } from '@/app/lib/constants'
import Input, { InputCheckbox, InputRadio } from '@/app/ui/dashboard/form-components/Input'
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
    redirect("/dashboard")
  }

  const student = await fetchStudentById(sid)

  return (
    <section className='w-full relative min-h-full rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Editar información de alumno</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>Completa los espacios con la información que desees eliminar y al hacer clic en <strong className='text-green-600'>guardar</strong>, volverás a la lista de alumnos para ver los cambios reflejados en la tabla.</p>
      </header>
      <section className='flex justify-start h-full'>
        <form action={async (formData) => {
          "use server";
          updateStudent(formData, sid)

          revalidatePath("/dashboard/students")
          redirect("/dashboard/students")
        }} className='flex gap-x-10 h-full relative bg-black/5 w-full items-start p-5'>
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

            <div className="relative h-full w-full">
              <select
                name="course" id='select-course' defaultValue={student.course}
                className="peer h-full w-full rounded-[7px] border border-gray-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-lg font-normal text-neutral-900 dark:text-neutral-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-gray-300 empty:!bg-gray-900 dark:empty:!bg-neutral-200 focus:border-2 focus:border-gray-900 dark:focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50">
                <option value="1">1er Año</option>
                <option value="2">2do Año</option>
                <option value="3">3er Año</option>
                <option value="4">4to Año</option>
                <option value="5">5to Año</option>
              </select>
              <label
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[14px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-300 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-300 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                Selecciona el curso
              </label>
            </div>
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
      </section>
    </section>
  )
}
