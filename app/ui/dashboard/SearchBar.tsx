export default function SearchBar() {
  return (
    <input
      value={""}
      className="w-full max-w-md text-lg py-3 px-6 placeholder:text-neutral-500 bg-neutral-200 rounded-lg leading-5 outline-none"
      type="text"
      placeholder="Buscar alumno..."
    />
  )
}
