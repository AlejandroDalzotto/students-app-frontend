import { useId } from "react";

interface Props {
  type: React.HTMLInputTypeAttribute;
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean
}

export default function Input({ name, placeholder, type, label, required }: Props) {
  const id = useId()
  return (
    <div className="flex gap-y-2 flex-col">
      {label &&
        <label htmlFor={`${id}-${name}`} className="text-xl font-medium">
          {label}
        </label>
      }
      <input
        required={required}
        type={type}
        id={`${id}-${name}`}
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        className="py-3 px-4 rounded text-lg bg-black/10 placeholder:text-neutral-600"
      />
    </div>
  )
}
