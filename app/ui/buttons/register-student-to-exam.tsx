"use client";

import { useModalStore } from "@/stores";

export default function RegisterStudentToExam() {

  const { openModal } = useModalStore()

  return (
    <button
      onClick={() => openModal("register-to-exam")}
      title="Registrar alumno a examen"
      className='flex gap-2 items-center justify-center py-3 px-5 rounded-lg text-xl font-medium fill-white bg-blue-500 text-white transition-all hover:bg-blue-700 active:shadow-inner active:scale-90'
    >
      <svg className='w-8 h-8'>
        <use xlinkHref='/sprites.svg#add'></use>
      </svg> 
      Registrar alumno a examen
    </button>
  )
}
