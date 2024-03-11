import { getExamWithRecordsInformation } from '@/app/lib/actions/exams.actions';
import { formatDateString } from '@/app/lib/utils';
import RegisterStudentToExam from '@/app/ui/buttons/register-student-to-exam';
import clsx from 'clsx';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function ExamRecordsPage({ params }: { params: { key: string } }) {

  const examKey = decodeURIComponent(params.key);
  const { data: { subject, date, key, module, records }, success } = await getExamWithRecordsInformation(examKey);

  if (success === false) {
    return redirect("/dashboard/")
  }

  return (
    <section className='w-full relative h-full row-[span_2/span_-1] p-6 rounded-lg flex flex-col'>
      <header className='mb-5 py-5 px-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>{key}</h2>
        <p className='text-neutral-900 dark:text-neutral-300 text-lg'>Toda la información registrada sobre el examen.</p>
      </header>

      <article className='h-fit mb-5 flex justify-between items-center relative'>
        <RegisterStudentToExam />
        <p className='font-bold dark:text-neutral-200 text-lg'>Fecha de examen {formatDateString(date)}</p>
      </article>

      <article className="h-full relative grid grid-cols-6 gap-5">

        <div className='col-span-5 w-full flex flex-col gap-y-2 relative'>

          {records.length ? (
            <>
              <header className='grid items-center grid-cols-4 py-4 px-12 w-full border bg-black/5 dark:bg-white/5 dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg'>
                <p>Alumno</p>
                <p>Nota</p>
                <p>Estado</p>
                <p>Asistió</p>
              </header>
              {records.map((record) => {
                return (
                  <div
                    className='grid items-center grid-cols-4 py-2 px-12 w-full border rounded-lg shadow dark:border-neutral-700 transition-colors dark:hover:border-neutral-400'
                    key={record.subject + record.exam_key + record.student_name + record.grade}>
                    <p>{record.student_name}</p>
                    <p>{record.grade}</p>
                    <p>{record.state}</p>
                    <p className={clsx(
                      { "text-green-400": record.attended },
                      { "text-red-400": !record.attended },
                    )}>{record.attended ? "Si" : "No"}</p>
                  </div>
                )
              })}
            </>
          ) : (
            <div className='border-2 rounded-lg shadow dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 h-full w-full grid place-content-center justify-items-center'>
              <span className='font-bold text-2xl dark:text-neutral-500'>No hay registros aun</span>
            </div>
          )}

        </div>
        <section className='col-span-1 grid grid-cols-1 gap-y-5'>
          <Link href={`/dashboard/modules/${module}`} title={`Ver información sobre ${module}`} className='border-2 rounded-lg shadow dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 h-full w-full grid place-content-center justify-items-center'>
            <span className='font-extrabold text-center text-3xl' style={{ textWrap: "balance" }}>{module}</span>
            <p className='text-center text-lg dark:text-neutral-500 font-medium'>Módulo</p>
          </Link>
          <Link href={`/dashboard/subjects/${subject}`} title={`Ver información sobre ${subject}`} className='border-2 rounded-lg shadow dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 h-full w-full grid place-content-center justify-items-center'>
            <span className='font-extrabold text-center text-3xl' style={{ textWrap: "balance" }}>{subject}</span>
            <p className='text-center text-lg dark:text-neutral-500 font-medium'>Materia</p>
          </Link>
        </section>
      </article>
    </section>
  )
}
