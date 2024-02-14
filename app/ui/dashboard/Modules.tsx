import { getModules } from "@/app/lib/actions/module.actions"
import Link from "next/link";

export default async function Modules() {

  const modules = await getModules();

  return (
    <article className="grid gap-5 grid-cols-1">
      {
        modules.map(({ name: moduleName, subjects }) => {
          return (
            <Link href={"#"} className="group/box flex justify-between items-center py-4 px-12 w-full border rounded-lg shadow dark:border-neutral-700 transition-colors dark:hover:border-neutral-400" key={moduleName}>
              <p className="font-medium">{moduleName}</p>

              {subjects.length ? (
                <div className="ml-5">
                  <p className="dark:text-neutral-700 dark:group-hover/box:text-neutral-200 transition-colors">
                    Cantidad de materias en el modulo: {subjects.length}
                  </p>
                </div>
              ) : (
                <div className="ml-5">
                  <p className="dark:text-neutral-700 dark:group-hover/box:text-neutral-200 transition-colors">
                    No hay materias asignadas a este modulo
                  </p>
                </div>
              )}
            </Link>
          )
        })
      }
    </article>
  )
}
