"use client";
import { useModalStore } from '@/stores';
import { usePathname } from 'next/navigation';
import RegisterStudentToExamForm from '../forms/RegisterStudentToExamForm';

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
          <RegisterStudentToExamForm examKey={examKey} />
        </article>
      </section>
    </div>
  )
}
