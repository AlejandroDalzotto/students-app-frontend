import SearchBar from "@/app/ui/dashboard/SearchBar";
import { Suspense } from "react";
import ListOfStudentsSkeleton from "@/app/ui/skeletons/ListOfStudentsSkeleton";
import Table from "@/app/ui/dashboard/Table";
import StudentDataPanel from "@/app/ui/dashboard/StudentDataPanel";
import DataPanelSkeleton from "@/app/ui/skeletons/DataPanelSkeleton";
import { type Metadata } from "next";
import { APP_NAME } from "@/app/lib/constants";
import AddButton from "@/app/ui/dashboard/AddButton";

export const metadata: Metadata = {
  title: `Lista de Alumnos | ${APP_NAME}`,
  description: "Aquí puedes ver toda la información de los alumnos en el sistema, aparte de modificarla.",
}

export default function StudentsPage({
  searchParams
}: {
  searchParams?: {
    query?: string,
    sid?: string
  }
}) {

  const query = searchParams?.query || ""
  const idStudent = searchParams?.sid || null

  return (
    <section className="w-full relative min-h-full rounded-lg flex flex-col p-4">
      <article className="w-full flex flex-grow">
        <div className="relative flex flex-col items-center flex-grow self-stretch">
          <div className="flex justify-between py-8 items-center self-stretch">
            <SearchBar />
            <div>
              <AddButton nagivateTo="/dashboard/students/add" />
            </div>
          </div>

          {/* Students table */}
          <section className="flex items-center gap-5 flex-grow self-stretch">
            {/* Left panel */}
            <article className="flex min-w-[64rem] flex-col justify-start items-start gap-5 flex-grow self-stretch">
              <Suspense key={query} fallback={<ListOfStudentsSkeleton />}>
                <Table query={query} />
              </Suspense>
            </article>

            <Suspense key={query + idStudent} fallback={<DataPanelSkeleton />}>
              <StudentDataPanel id={idStudent} />
            </Suspense>
          </section>
        </div>
      </article>
    </section>
  )
}
