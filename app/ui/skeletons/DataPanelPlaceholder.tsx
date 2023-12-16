import Image from "next/image";

export default function DataPanelPlaceholder() {
  return (
    <div className="flex p-5 flex-col items-center justify-center gap-5 flex-grow bg-black/5 h-full rounded-lg">
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
