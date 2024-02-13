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
    <section className="w-full relative min-h-full rounded-lg flex flex-col p-4">
      <article className="w-full flex flex-grow">
        <div className="relative flex flex-col items-center flex-grow self-stretch">
          <div className="flex justify-between py-8 items-center self-stretch">
            <SearchBar />
            <div className="flex items-center gap-x-5">
              <EditButtom active={Boolean(dniStudent)} nagivateTo={`/dashboard/students/edit?sid=${dniStudent}`} />
              <DeleteButton />
              <AddButton nagivateTo="/dashboard/students/add" title="Agregar un nuevo alumno al sistema" />
            </div>
          </div>

          {/* Students table */}
          <section className="flex items-center gap-5 flex-grow self-stretch">
            {/* Left panel */}
            <article className="flex min-w-[64rem] flex-col justify-start items-start gap-5 flex-grow self-stretch">
              <Suspense key={query} fallback={<ListOfStudentsSkeleton />}>
                <Table query={query} currentPage={currentPage} />
              </Suspense>

              <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
              </div>
            </article>

            {/* Right panel */}
            <Suspense key={query + dniStudent} fallback={<DataPanelSkeleton />}>
              <StudentDataPanel dni={dniStudent} />
            </Suspense>
          </section>
        </div>
      </article>
    </section>
  )
}
