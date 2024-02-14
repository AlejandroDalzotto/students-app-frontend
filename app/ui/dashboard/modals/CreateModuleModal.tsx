import { createModule } from "@/app/lib/actions/module.actions";
import { useModalStore } from "@/stores";
import Input from "../form-components/Input";

export default function CreateModuleModal() {

  const { closeModal } = useModalStore()

  return (
    <div onClick={closeModal} className="inset-1 bg-black/30 flex items-center justify-center backdrop-blur-sm fixed z-30">
      <section onClick={(e) => e.stopPropagation()} className="w-[90%] p-4 max-w-2xl rounded bg-neutral-100 dark:bg-neutral-900">
        <header className="flex justify-between items-center">
          <h3 className="text-xl dark:text-neutral-400 font-bold">Crear nuevo modulo</h3>
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
          <form action={createModule}>
            <Input name="name" type="text" placeholder="Primer año" label="Nombre del modulo" required />

            <button
              className="bg-green-600 text-white font-semibold text-xl transition-colors hover:bg-green-800 duration-100 py-3 px-6 rounded"
              type="submit">Aceptar</button>
          </form>
        </article>
      </section>
    </div>
  )
}
