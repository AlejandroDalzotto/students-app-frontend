import { APP_NAME } from "@/app/lib/constants";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Panel principal | ${APP_NAME}`,
  description: `A partir de aquí puedes visitar casi cualquier apartado de ${APP_NAME}`
}

export default function DashboardPage() {
  return (
    <section className="w-full relative h-full row-[span_2/span_-1] p-6 flex flex-col items-center justify-center">
      <Image
        src="/dashboard-image-desktop.svg"
        alt="Ilustración del panel principal"
        width={1122}
        height={939}
        className="w-screen max-w-lg select-none"
      />
      <div className="w-full max-w-xl flex flex-col items-center gap-y-5 mt-10">
        <p className="text-3xl font-medium">Este es el panel principal</p>
        <Link href="/" className="uppercase font-medium text-neutral-500 dark:text-neutral-300 text-xs p-2 w-fit hover:text-black dark:hover:text-neutral-500">volver a la inicio</Link>
      </div>
    </section>
  )
}
