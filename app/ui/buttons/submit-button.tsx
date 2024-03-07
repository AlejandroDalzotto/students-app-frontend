"use client";

import { useFormStatus } from "react-dom";

interface Props {
  children: React.ReactNode
}

export default function SubmitButton({ children }: Props) {

  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="bg-blue-500 disabled:bg-neutral-500 text-white font-semibold text-xl transition-colors hover:bg-blue-700 duration-100 mx-auto block mt-10 mb-5 py-3 px-6 rounded-lg"
    >
      {
        pending ? (
          <div className="icon-loader-container">
            <div className="cube"><div className="cube__inner"></div></div>
            <div className="cube"><div className="cube__inner"></div></div>
            <div className="cube"><div className="cube__inner"></div></div>
          </div>
        ) : children
      }
    </button>
  )
}
