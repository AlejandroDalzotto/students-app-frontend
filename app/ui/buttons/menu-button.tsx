"use client"

import { Button } from "@material-tailwind/react";

interface Props {
  toggle: () => void
}

export default function MenuButton({ toggle }: Props) {
  return (
    <Button onClick={toggle} className="p-2 flex items-center justify-center shadow-none fill-white bg-transparent">
      <svg className="w-8 h-8">
        <use xlinkHref="/sprites.svg#bars"></use>
      </svg>
    </Button>
  )
}
