export default function Divider({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-center justify-center">
      <hr className="bg-gray-700 h-[2px] w-full" />
      <p className="text-gray-700 dark:text-gray-100 text-xl w-fit text-center whitespace-nowrap">{text}</p>
      <hr className="bg-gray-700 h-[2px] w-full" />
    </div>
  )
}
