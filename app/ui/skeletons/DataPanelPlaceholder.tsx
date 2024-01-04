import Image from "next/image";

export default function DataPanelPlaceholder() {
  return (
    <div className="relative rounded-lg flex flex-col justify-center items-center gap-y-5 p-5 w-full max-w-lg h-full bg-black/5">
      <Image
        src="/no_data.svg"
        alt="Imagen de la carta de info"
        width={200}
        height={195}
      />

      <p className="text-neutral-500 text-center text-lg font-medium">Selecciona un alumno <br /> para ver su información completa</p>
    </div>
  )
}
