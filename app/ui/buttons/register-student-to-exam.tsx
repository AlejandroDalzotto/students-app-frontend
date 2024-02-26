"use client";

import { useModalStore } from "@/stores";

export default function RegisterStudentToExam() {

  const { openModal } = useModalStore()

  return (
    <button
      onClick={() => openModal("register-to-exam")}
      title="Registrar alumno a examen"
      className='py-3 px-5 rounded-lg text-xl font-medium bg-blue-500 text-white transition-all hover:bg-blue-700 active:shadow-inner active:scale-95'
    >
      Registrar alumno a examen
    </button>
  )
}
