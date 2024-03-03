import { createExam } from "@/app/lib/actions";
import { useModalStore } from "@/stores";
import Input from "../form-components/Input";

export default function CreateExamModal() {

  const { closeModal } = useModalStore()

  return (
    <div onClick={closeModal} className="inset-1 bg-black/30 flex items-center justify-center backdrop-blur-sm fixed z-30">
      <section onClick={(e) => e.stopPropagation()} className="w-[90%] p-4 max-w-2xl rounded bg-neutral-100 dark:bg-neutral-900">
        <header className="flex justify-between items-center">
          <h3 className="text-xl dark:text-neutral-400 font-bold">Crear nuevo examen</h3>
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
          <form action={(d) => {
            createExam(d);
            closeModal();
          }}>
            <Input name="key" type="text" placeholder="Examen lengua 2023..." label="Nombre del examen" required />
            <Input name="subject" type="text" placeholder="Matemática" label="Nombre de la materia" required />
            <Input name="module" type="text" placeholder="Primer modulo (1er año)" label="Nombre del modulo" required />
            <Input name="date" type="date" label="Fecha del Examen" required />

            <button
              className="bg-green-600 text-white font-semibold text-xl transition-colors hover:bg-green-800 duration-100 py-3 px-6 rounded"
              type="submit">Aceptar</button>
          </form>
        </article>
      </section>
    </div>
  )
}
