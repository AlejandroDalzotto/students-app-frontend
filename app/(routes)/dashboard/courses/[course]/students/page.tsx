import { fetchStudentsByCoursePages } from "@/app/lib/actions";
import Pagination from "@/app/ui/dashboard/Pagination";
import SearchBar from "@/app/ui/dashboard/SearchBar";
import StudentByCourse from "@/app/ui/dashboard/tables/StudentByCourse";
import { Suspense } from "react";

export default async function StudentsByCoursePage({
  params,
  searchParams
}: {
  params: { course: string; },
  searchParams?: {
    query?: string,
    page?: string,
  }
}) {

  const courseName = decodeURIComponent(params.course);

  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  const totalPages = await fetchStudentsByCoursePages(query, courseName)

  return (
    <section className="h-full w-full relative flex flex-col gap-2">
      <header className='py-5 px-5 rounded-lg bg-black/5 dark:bg-white/5 flex flex-col gap-y-4'>
        <h2 className='text-2xl font-semibold'>Alumnos de <span className="text-green-500">{courseName}</span></h2>
      </header>

      <article className="grid grid-cols-10 my-2 items-center">
        <div className="col-span-6">
          <SearchBar placeholder="Ingresa nombre y/o apellido" label="Buscar alumno..." />
        </div>

        <div className="flex w-full justify-center scale-90">
          <Pagination totalPages={totalPages} />
        </div>
      </article>

      <article className="grid w-full grid-cols-10">

        <Suspense fallback={<h1>Cargando...</h1>}>
          <StudentByCourse course={courseName} query={query} currentPage={currentPage} />
        </Suspense>


        <div className="col-span-3">

        </div>

      </article>
    </section>
  )
}
