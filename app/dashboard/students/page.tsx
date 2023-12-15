import StudentsTable from "@/app/ui/dashboard/StudentsTable";
import Header from "@/app/ui/dashboard/Header";

export default function StudentsPage() {

  return (
    <section className="w-full relative rounded-lg">
      <Header />
      <article className="w-full flex">
        <StudentsTable />
      </article>
    </section>
  )
}
