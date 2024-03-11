import { useModalStore } from '@/stores'
import PromoteStudentForm from '../forms/PromoteStudentForm'

export default function PromoteStudentModal() {
  const { closeModal } = useModalStore()

  return (
    <div onClick={closeModal} className="inset-1 bg-black/30 flex items-center justify-center backdrop-blur-sm fixed z-30">
      <section onClick={(e) => e.stopPropagation()} className="w-[90%] p-4 max-w-2xl rounded bg-neutral-100 dark:bg-neutral-900">
        <header className="flex justify-between items-center">
          <h3 className="text-xl dark:text-neutral-400 font-bold">Promocionar alumno a un nuevo curso</h3>
          <button
            onClick={closeModal}
            className="transition-transform hover:scale-125 active:scale-90"
          >
            <svg className='w-8 h-8'>
              <use xlinkHref='/sprites.svg#close'></use>
            </svg>
          </button>
        </header>

        <p className='text-center pt-5 italic text-neutral-600' style={{ textWrap: 'balance' }}>
          Al darle a aceptar, si los datos están correctos, se guardará el registro actual en los registros academicos.
        </p>

        <article>
          <PromoteStudentForm />
        </article>
      </section>
    </div>
  )
}
