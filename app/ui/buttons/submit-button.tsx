"use client";

import clsx from "clsx";
import { useFormStatus } from "react-dom";

interface Props {
  children: React.ReactNode,
  color?: "blue" | "green" | "red",
}

export default function SubmitButton({ children, color = "blue" }: Props) {

  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className={clsx(
        "disabled:bg-neutral-500 text-white font-semibold text-xl transition-colors py-3 px-6 rounded-lg",
        { "bg-blue-500 hover:bg-blue-700": color === "blue" },
        { "bg-green-500 hover:bg-green-700": color === "green" },
        { "bg-red-500 hover:bg-red-700": color === "red" },
      )}
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
