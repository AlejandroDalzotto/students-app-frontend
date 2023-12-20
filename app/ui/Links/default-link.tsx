"use client"

import { Button } from "@material-tailwind/react";
import type { variant, color } from "@material-tailwind/react/types/components/button";
import Link from "next/link";
import { type Key } from "react";

interface Props {
  href: string;
  key?: Key | null;
  text: string;
  color?: color;
  variant?: variant
}

export default function DefaultLink({ href, text, color, key, variant }: Props) {
  return (
    <Link href={href} key={key}>
      <Button className="flex items-center gap-3" color={color} variant={variant}>
        {text}
      </Button>
    </Link>
  )
}
