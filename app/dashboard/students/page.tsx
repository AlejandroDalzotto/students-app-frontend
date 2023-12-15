import Header from "@/app/ui/dashboard/Header";
import SearchBar from "@/app/ui/dashboard/SearchBar";
import { Suspense } from "react";
import { randomUUID } from "crypto";
import ListOfStudentsSkeleton from "@/app/ui/skeletons/ListOfStudentsSkeleton";
import Table from "@/app/ui/dashboard/Table";

export default function StudentsPage({
  searchParams
}: {
  searchParams?: {
    query?: string
  }
}) {

  const query = searchParams?.query || ""

  return (
    <section className="w-full relative rounded-lg">
      <Header />
      <article className="w-full flex">
        <div className="relative flex flex-col items-center flex-grow self-stretch">
          <div className="flex justify-between py-8 items-center self-stretch">
            <SearchBar />
            {/* Action buttons go here */}
          </div>

          {/* Students table */}
          <section className="flex items-center gap-5 flex-grow self-stretch">
            {/* Left panel */}
            <article className="flex min-w-[64rem] flex-col justify-center items-start gap-5 flex-grow self-stretch max-w-5xl">
              <Suspense key={randomUUID() + query} fallback={<ListOfStudentsSkeleton />}>
                <Table query={query} />
              </Suspense>
            </article>

            {/* Right panel go here */}
          </section>
        </div>
      </article>
    </section>
  )
}
