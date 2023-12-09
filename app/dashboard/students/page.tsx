import { fetchStudents } from "@/app/lib/services/student.service";
import ListOfStudents from "@/app/ui/dashboard/ListOfStudents";
import { Suspense } from "react";
import LoadingStudentsPage from "./loading";

export default async function StudentsPage() {

  const students = await fetchStudents()

  return (
    <Suspense fallback={<LoadingStudentsPage />}>
      <section className="w-full relative rounded-lg">
        <div className="w-full">
          <header className="h-fit flex items-center">
            <h2 className="text-3xl my-5 font-medium">Lista de alumnos</h2>
          </header>
          <article className="w-full flex">
            <ListOfStudents students={students} />
          </article>
        </div>
      </section>
    </Suspense>
  )
}
