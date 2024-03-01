import SearchBar from "@/app/ui/dashboard/SearchBar";
import { Suspense } from "react";
import ListOfStudentsSkeleton from "@/app/ui/skeletons/ListOfStudentsSkeleton";
import Table from "@/app/ui/dashboard/Table";
import StudentDataPanel from "@/app/ui/dashboard/StudentDataPanel";
import DataPanelSkeleton from "@/app/ui/skeletons/DataPanelSkeleton";
import { type Metadata } from "next";
import { APP_NAME } from "@/app/lib/constants";
import AddButton from "@/app/ui/dashboard/AddButton";
import Pagination from "@/app/ui/dashboard/Pagination";
import EditButtom from "@/app/ui/dashboard/EditButtom";
import DeleteButton from "@/app/ui/dashboard/DeleteButton";
import { fetchStudentsPages } from "@/app/lib/actions/student.actions";

export const metadata: Metadata = {
  title: `Lista de Alumnos | ${APP_NAME}`,
  description: "Aquí puedes ver toda la información de los alumnos en el sistema, aparte de modificarla.",
}

export default async function StudentsPage({
  searchParams
}: {
  searchParams?: {
    query?: string,
    sid?: string,
    page?: string,
  }
}) {

  const query = searchParams?.query || ""
  const dniStudent = searchParams?.sid || null
  const currentPage = Number(searchParams?.page) || 1

  const totalPages = await fetchStudentsPages(query)

  return (
    <section className="w-full relative h-full row-[span_2/span_-1] p-6 flex flex-col">
      <header className="flex w-full justify-between py-6 items-center">
        <SearchBar placeholder="Ingresa nombre y/o apellido" label="Buscar alumno..." />
        <div className="flex items-center gap-x-5">
          <EditButtom active={Boolean(dniStudent)} nagivateTo={`/dashboard/students/edit?sid=${dniStudent}`} />
          <DeleteButton />
          <AddButton nagivateTo="/dashboard/students/add" title="Agregar un nuevo alumno al sistema" />
        </div>
      </header>

      <section className="grid grid-cols-12 grid-flow-row h-full w-full relative gap-x-4">

        <article className="col-span-9 grid grid-rows-[80%_minmax(0,20%)]">
          <Suspense key={query} fallback={<ListOfStudentsSkeleton />}>
            <Table query={query} currentPage={currentPage} />
          </Suspense>

          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </article>

        <Suspense key={query + dniStudent} fallback={<DataPanelSkeleton />}>
          <StudentDataPanel dni={dniStudent} />
        </Suspense>

      </section>
    </section>
  )
}
