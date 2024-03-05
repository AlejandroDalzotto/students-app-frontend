import { useModalStore } from "@/stores";
import Input from "../form-components/Input";
import { createModule } from "@/app/lib/actions";

export default function CreateModuleModal() {

  const { closeModal } = useModalStore()

  return (
    <div onClick={closeModal} className="inset-1 bg-black/30 flex items-center justify-center backdrop-blur-sm fixed z-30">
      <section onClick={(e) => e.stopPropagation()} className="w-[90%] p-4 max-w-2xl rounded bg-neutral-100 dark:bg-neutral-900">
        <header className="flex justify-between items-center">
          <h3 className="text-xl dark:text-neutral-400 font-bold">Crear nuevo módulo</h3>
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
            createModule(d);
            closeModal();
          }}>
            <Input name="name" type="text" placeholder="Primer módulo (1er Año)..." label="Nombre del módulo" required />
            <Input name="course_name" type="text" placeholder="Primer año..." label="Nombre del curso" required />
            <Input name="start" type="date" placeholder="Fecha de inicio" label="Nombre del modulo" required />
            <Input name="finish" type="date" label="Fecha de finalización" required />

            <button
              className="bg-green-600 text-white font-semibold text-xl transition-colors hover:bg-green-800 duration-100 py-3 px-6 rounded"
              type="submit">Aceptar</button>
          </form>
        </article>
      </section>
    </div>
  )
}