import { useId } from "react";

interface DefaultProps {
  type: React.HTMLInputTypeAttribute;
  pattern?: string;
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string | number | readonly string[] | undefined;
  error?: string;
}

interface RadioProps extends Omit<DefaultProps, "type" | "placeholder" | "required"> {
  defaultChecked?: boolean;
  value: string;
}

interface CheckboxProps extends Omit<DefaultProps, "type" | "placeholder" | "required"> {
  checked?: boolean | undefined
}

export function InputCheckbox({ name, label, checked }: CheckboxProps) {
  const id = useId()
  return (
    <div className="inline-flex items-center">
      <label className="relative flex w-fit items-center p-3 rounded-full cursor-pointer" htmlFor={`${id}-${name}`}>
        <input type="checkbox" defaultChecked={checked}
          name={name}
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-neutral-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-neutral-500 before:opacity-0 before:transition-opacity checked:border-neutral-900 dark:checked:border-neutral-50 checked:bg-neutral-900 dark:checked:bg-neutral-50 checked:before:bg-neutral-900 dark:checked:before:bg-neutral-50 hover:before:opacity-10"
          id={`${id}-${name}`} />
        <span
          className="absolute text-white dark:text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
            stroke="currentColor" strokeWidth="1">
            <path fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"></path>
          </svg>
        </span>
      </label>
      <label className="mt-px w-fit whitespace-nowrap text-neutral-700 dark:text-neutral-100 cursor-pointer select-none" htmlFor={`${id}-${name}`}>
        {label}
      </label>
    </div>
  )
}

export function InputRadio({ name, value, defaultChecked, label }: RadioProps) {
  const id = useId()
  return (
    <div className="inline-flex items-center w-full">
      <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor={`${id}-${name}`}>
        <input name={name} type="radio" defaultChecked={defaultChecked} value={value}
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-neutral-400 text-neutral-900 dark:text-neutral-50 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-neutral-600 dark:before:bg-neutral-50 before:opacity-0 before:transition-opacity checked:border-neutral-900 dark:checked:border-neutral-50 checked:before:bg-neutral-900 dark:checked:before:bg-neutral-50 hover:before:opacity-10"
          id={`${id}-${name}`} />
        <span
          className="absolute text-neutral-900 dark:text-neutral-50 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
      <label className="mt-px font-light text-neutral-700 dark:text-neutral-100 cursor-pointer select-none" htmlFor={`${id}-${name}`}>
        {label}
      </label>
    </div>
  )
}

export default function Input({ name, placeholder, type, label, required, defaultValue, pattern, error }: DefaultProps) {
  const id = useId()
  return (
    <div className="relative h-full w-full min-w-[200px] my-16">
      <input type={type} placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
        pattern={pattern}
        required={required}
        id={`${id}-${name}`}
        autoComplete="off"
        className="peer h-full w-full text-xl text-neutral-900 dark:text-white border-b border-neutral-200 bg-transparent pt-4 pb-1.5 font-normal outline outline-0 transition-all placeholder-shown:border-neutral-300 focus:border-neutral-500 focus:outline-0 disabled:border-0 disabled:bg-neutral-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
      <label
        htmlFor={`${id}-${name}`}
        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-neutral-500 dark:text-neutral-300 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-neutral-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-xl peer-placeholder-shown:leading-[2.95] peer-placeholder-shown:text-neutral-700 dark:peer-placeholder-shown:text-neutral-400 peer-focus:text-[14px] peer-focus:leading-tight peer-focus:text-neutral-900 dark:peer-focus:text-neutral-600 peer-focus:after:scale-x-100 peer-focus:after:border-neutral-900 dark:peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-neutral-500">
        {label}
      </label>
      {error && <p className="absolute top-14 left-0 text-red-400">{error}</p>}
    </div>
  )
}
