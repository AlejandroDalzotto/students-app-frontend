import Table from "./Table"
import SearchBar from "./SearchBar"
import { Suspense } from "react"
import ListOfStudentsSkeleton from "../skeletons/ListOfStudentsSkeleton"


export default function StudentsTable() {

  return (
    <div className="relative flex flex-col items-center flex-grow self-stretch">
      <div className="flex justify-between py-8 items-center self-stretch">
        <SearchBar />
        {/* Action buttons go here */}
      </div>

      {/* Students table */}
      <section className="flex items-center gap-5 flex-grow self-stretch">
        {/* Left panel */}
        <article className="flex min-w-[64rem] flex-col justify-center items-start gap-5 flex-grow self-stretch max-w-5xl">
          <Suspense fallback={<ListOfStudentsSkeleton />}>
            <Table />
          </Suspense>
        </article>

        {/* Right panel go here */}
      </section>
    </div>

  )
}
