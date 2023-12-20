"use client"

import { Button } from "@material-tailwind/react";
import { type color } from "@material-tailwind/react/types/components/button";
import Link from "next/link";
import { type Key } from "react";

interface Props {
  href: string;
  icon: string;
  key?: Key | null;
  text: string;
  color?: color
}

export default function IconLink({ href, icon, key, text, color }: Props) {
  return (
    <Link href={href} key={key}>
      <Button className="flex items-center gap-3 fill-white text-white" color={color}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <use xlinkHref={`/sprites.svg#${icon}`}></use>
        </svg>
        {text}
      </Button>
    </Link>
  )
}
