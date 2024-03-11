import { getSimpleCourses } from '@/app/lib/actions'
import { APP_NAME } from '@/app/lib/constants'
import AddStudentForm from '@/app/ui/dashboard/forms/AddStudentForm'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: `Añadir un nuevo alumno | ${APP_NAME}`,
  description: `Aquí puede agregar un nuevo alumno al sistema. Los cambios se veran reflejados cuando des al botón de guardar.`
}

export default async function AddStudentPage() {

  const { data } = await getSimpleCourses()

  return (
    <section className='w-full relative h-full row-[span_2/span_-1] p-6 rounded-lg flex flex-col'>
      <header className='mb-5 p-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Agregar un nuevo alumno</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>Completa los espacios con la información correcta y al hacer clic en <strong className='text-green-600'>guardar</strong>, volverás a la lista de alumnos para ver al nuevo alumno añadido en la tabla.</p>
      </header>
      <section className='flex justify-start h-full'>
        <AddStudentForm data={data} />
      </section>
    </section>
  )
}
