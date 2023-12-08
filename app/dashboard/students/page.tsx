import ListOfStudents from "@/app/ui/ListOfStudents";
import ListOfStudentsSkeleton from "@/app/ui/skeletons/ListOfStudentsSkeleton";
import { Suspense } from "react";

export default function StudentsPage() {
  return (
    <section className="w-full relative rounded-lg">
      <div className="w-full">
        <header className="h-40 flex items-center">
          <h2 className="text-3xl font-medium">Lista de alumnos</h2>
        </header>
        <article className="w-full relative flex">
          <Suspense fallback={<ListOfStudentsSkeleton />}>
            <ListOfStudents />
          </Suspense>
        </article>
      </div>
    </section>
  )
}
