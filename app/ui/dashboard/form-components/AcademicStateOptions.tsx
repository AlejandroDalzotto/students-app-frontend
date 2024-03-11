export default function AcademicStateOptions() {
  return (
    <div className="relative h-full w-full">
      <select
        name="state" id='select-state'
        className="peer h-full w-full rounded-[7px] border border-neutral-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-lg font-normal text-neutral-900 dark:text-neutral-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-neutral-300 placeholder-shown:border-t-neutral-300 empty:!bg-neutral-900 dark:empty:!bg-neutral-200 focus:border-2 focus:border-neutral-900 dark:focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-neutral-50">

        <option className="text-neutral-900" value="Regular">Regular</option>
        <option className="text-neutral-900" value="Se Recibió">Se Recibió</option>
        <option className="text-neutral-900" value="Repetidor">Repetidor</option>
        <option className="text-neutral-900" value="Abandonó">Abandonó</option>
      </select>
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[14px] font-normal leading-tight text-neutral-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-neutral-300 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-neutral-300 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3] peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-neutral-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-neutral-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-neutral-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-neutral-500">
        Selecciona el estado
      </label>
    </div>
  )
}
