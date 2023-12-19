import { createStudent } from '@/app/lib/actions'
import { APP_NAME } from '@/app/lib/constants'
import Input from '@/app/ui/dashboard/form-components/Input'
import { type Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `Añadir un nuevo alumno | ${APP_NAME}`,
  description: `Aquí puede agregar un nuevo alumno al sistema. Los cambios se veran reflejados cuando des al botón de guardar.`
}

export default async function AddStudentPage() {

  return (
    <section className='w-full relative min-h-full rounded-lg flex flex-col'>
      <header className='mb-5 py-20 px-5 rounded-lg bg-black/5 flex flex-col gap-y-4'>
        <h2 className='text-3xl font-semibold'>Agregar un nuevo alumno</h2>
        <p className='text-neutral-900 text-xl'>Completa los espacios con la información correcta y al hacer clic en <strong className='text-green-600'>guardar</strong>, volverás a la lista de alumnos para ver al nuevo alumno añadido en la tabla.</p>
      </header>
      <section className='flex justify-start h-full'>
        <form action={createStudent} className='flex flex-col  h-full bg-black/5 w-full items-start p-5'>
          <fieldset>
            <legend>Información personal</legend>
            <Input type="text" name="name" placeholder='Pedro' required label='Nombre' />
            <Input type="text" name="lastName" placeholder='Rodríguez' required label='Apellido' />
            <Input type="date" name="birth" label='Fec. de Nacimiento' />
            <Input type="text" name="address" label='Dirección' placeholder='Calle 123' />
            <Input type="number" name="dni" label='Documento' placeholder='40130104' required />
            <fieldset>
              <legend>Sexo</legend>
              <input type="radio" value="M" name='sex' defaultChecked />
              <input type="radio" value="F" name='sex' />
              <input type="radio" value="O" name='sex' />
            </fieldset>
          </fieldset>

          <fieldset>
            <legend>Contácto</legend>
            <Input type="email" name="mail" placeholder="pedro@gmail.com" required label='Email' />
            <Input type="number" name="cellPhone" label='Número de celular' placeholder='15-1234-5678' />
            <Input type="number" name="linePhone" label='Teléfono' placeholder='(011) 1234-5678' />
          </fieldset>

          <fieldset>
            <legend>Información técnica</legend>
            <Input type="number" name="legajo" placeholder='1234' label='Legajo' />
            <Input type="number" name="matricula" placeholder='2023001' label='Matricula' />
          </fieldset>

          <fieldset>
            <legend>Certificados y discapacidad</legend>
            <input type="checkbox" name='birthCert' />
            <input type="checkbox" name='studyCert' />
            <input type="checkbox" name='disability' />
            <input type="checkbox" name='health' />
          </fieldset>
          <div>
            <select name="course">
              <option value="1">1er Año</option>
              <option value="2">2do Año</option>
              <option value="3">3er Año</option>
              <option value="4">4to Año</option>
              <option value="5">5to Año</option>
            </select>
          </div>
          <button type='submit' className='py-3 px-5 rounded-lg text-xl font-medium bg-blue-500 text-white transition-all hover:bg-blue-700 active:shadow-inner active:scale-95'>Guardar</button>
        </form>
      </section>
    </section>
  )
}
