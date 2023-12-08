import { APP_NAME } from "../lib/constants";

export default function TitleNav() {
  return (
    <h1 className="text-5xl font-bold leading-tight tracking-tight">Bienvenido a <span className="underline hover:text-blue-500 select-none">{APP_NAME}</span></h1>
  )
}
