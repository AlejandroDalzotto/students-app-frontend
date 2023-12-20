"use client"

import { Button } from "@material-tailwind/react";
import type { color, variant } from "@material-tailwind/react/types/components/button";
import clsx from "clsx";
import Link from "next/link";
import type { Key } from "react";

interface Props {
  text: string;
  href: string;
  icon: string;
  key?: Key | null;
  color?: color;
  variant?: variant;
  isActive: boolean;
  isSidebarOpen: boolean;
}

export default function SidebarLink({ href, text, color, key, variant, icon, isActive, isSidebarOpen }: Props) {
  return (
    <Link href={href} key={key} className={clsx("relative", { "w-fit": !isSidebarOpen })} title={`Ir a ${text.toLowerCase()}`}>
      <Button className={clsx(
        "flex items-center w-full gap-3 bg-black/10 fill-black text-black transition-all hover:fill-blue-800 hover:bg-blue-100 hover:text-blue-800",
        {
          "fill-blue-800 bg-blue-100 text-blue-800": isActive,
          "w-fit": !isSidebarOpen
        }
      )}
        color={color}
        variant={variant}
        fullWidth
      >
        <svg
          className="h-8 w-8"
        >
          <use xlinkHref={`/sprites.svg#${icon}`}></use>
        </svg>
        {isSidebarOpen ? text : null}
      </Button>
    </Link>
  )
}
