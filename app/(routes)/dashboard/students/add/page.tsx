import { createStudent } from '@/app/lib/actions'
import { APP_NAME } from '@/app/lib/constants'
import Input, { InputCheckbox, InputRadio } from '@/app/ui/dashboard/form-components/Input'
import { type Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `Añadir un nuevo alumno | ${APP_NAME}`,
  description: `Aquí puede agregar un nuevo alumno al sistema. Los cambios se veran reflejados cuando des al botón de guardar.`
}

export default async function AddStudentPage() {

  return (
    <section className='w-full relative min-h-full rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Agregar un nuevo alumno</h2>
        <p className='text-neutral-900 text-lg'>Completa los espacios con la información correcta y al hacer clic en <strong className='text-green-600'>guardar</strong>, volverás a la lista de alumnos para ver al nuevo alumno añadido en la tabla.</p>
      </header>
      <section className='flex justify-start h-full'>
        <form action={createStudent} className='flex gap-x-10 h-full relative bg-black/5 w-full items-start p-5'>
          <fieldset className='w-full'>
            <legend className='font-medium text-lg text-neutral-600'>Información personal</legend>
            <Input type="text" name="name" placeholder='Pedro' required label='Nombre' />
            <Input type="text" name="lastName" placeholder='Rodríguez' required label='Apellido' />
            <Input type="date" name="birth" label='Fec. de Nacimiento' />
            <Input type="text" name="address" label='Dirección' placeholder='Calle 123' />
            <Input type="number" name="dni" label='Documento' placeholder='40130104' required />
          </fieldset>

          <fieldset className='w-full'>
            <legend className='font-medium text-lg text-neutral-600'>Contácto</legend>
            <Input type="email" name="mail" placeholder="pedro@gmail.com" required label='Email' />
            <Input type="number" name="cellPhone" label='Número de celular' placeholder='15-1234-5678' />
            <Input type="number" name="linePhone" label='Teléfono' placeholder='(011) 1234-5678' />
          </fieldset>

          <fieldset className='w-full'>
            <legend className='font-medium text-lg text-neutral-600'>Información técnica</legend>
            <Input type="number" name="legajo" placeholder='1234' label='Legajo' />
            <Input type="number" name="matricula" placeholder='2023001' label='Matricula' />

            <div className="relative h-10 w-72 min-w-[200px]">
              <select
                name="course" id='select-course'
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-6 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                <option value="1">1er Año</option>
                <option value="2">2do Año</option>
                <option value="3">3er Año</option>
                <option value="4">4to Año</option>
                <option value="5">5to Año</option>
              </select>
              <label
                htmlFor='select-course'
                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none font-normal text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Selecciona el curso
              </label>
            </div>
          </fieldset>

          <div className='flex flex-col w-full'>
            <fieldset>
              <legend className='font-medium text-lg text-neutral-600'>Certificados y discapacidad</legend>
              <div className='w-full h-full grid grid-cols-1'>
                <InputCheckbox name='birthCert' label='Partida de nacimiento' />
                <InputCheckbox name='studyCert' label='Certificado de estudios' />
                <InputCheckbox name='health' label='Cerfiticado de buena salud' />
                <InputCheckbox name='disability' label='Discapacidad' />
              </div>
            </fieldset>
            <fieldset>
              <legend className='font-medium text-lg text-neutral-600'>Sexo</legend>
              <InputRadio value='M' name='sex' defaultChecked label='Masculino' />
              <InputRadio value='F' name='sex' label='Femenino' />
              <InputRadio value='O' name='sex' label='Otro' />
            </fieldset>
          </div>
          <button type='submit' className='absolute bottom-5 right-5 py-3 px-5 rounded-lg text-xl font-medium bg-blue-500 text-white transition-all hover:bg-blue-700 active:shadow-inner active:scale-95'>Guardar</button>
        </form>
      </section>
    </section>
  )
}
