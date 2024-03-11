import { getRecords } from '@/app/lib/actions';
import WithoutNoDataOnTable from '../WithoutNoDataOnTable';
import clsx from 'clsx';

export default async function ExamRecordsTable() {

  const { data } = await getRecords();

  if (!data.length) {
    return <WithoutNoDataOnTable />
  }

  return (
    <div className='col-span-5 w-full flex flex-col gap-y-2 relative'>
      <header className='grid items-center grid-cols-4 py-4 px-12 w-full border bg-black/5 dark:bg-white/5 dark:border-neutral-700 transition-colors dark:hover:border-neutral-400 rounded-lg'>
        <p>Alumno</p>
        <p>Nota</p>
        <p>Estado</p>
        <p>Asistió</p>
      </header>
      {data.map((record) => {
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
    </div>
  )
}
