import DataPanelPlaceholder from "../skeletons/DataPanelPlaceholder"
import Image from "next/image"
import { calculateAge, getCourseStringFromNumber } from "@/app/lib/utils"
import Divider from "./Divider"
import StudentData, { StudentDataWithCheck } from "./StudentData"
import { fetchStudentById } from "@/app/lib/actions/student.actions"

export default async function StudentDataPanel({ dni: id }: { dni?: string | number | null }) {
  if (!id) {
    return (
      <DataPanelPlaceholder />
    )
  }

  const student = await fetchStudentById(id)

  return (
    <section className="relative rounded-lg flex flex-col items-center gap-y-5 p-5 w-full max-w-lg h-full bg-black/5 dark:bg-black/20">
      <header className="w-full h-fit gap-5 items-center flex">
        <Image
          width={120}
          height={120}
          alt="Avatar"
          src={student.sex.toLowerCase() === "m" ? "/male_avatar.svg" : "/female_avatar.svg"}
        />

        <div className="flex flex-col">
          <p className="text-3xl font-semibold text-start whitespace-nowrap">{student.name}, {student.lastName}</p>
          <span className="text-2xl font-normal text-blue-500 whitespace-nowrap">{student.course}</span>
        </div>
      </header>
      <article className="flex flex-col flex-grow w-full gap-y-6 mt-10">
        <Divider text="Información personal" />
        <div className="flex justify-between items-center w-full">
          <StudentData title="Edad" icon="calendar_clock" text={calculateAge(student.birth)} />
          <StudentData title="Dirección" icon="home" text={student.address} />
        </div>
        <Divider text="Contácto" />
        <div className="flex justify-between items-center w-full">
          <StudentData title="Correo electronico" icon="mail" text={student.mail} />
        </div>
        <div className="flex justify-between items-center w-full">
          <StudentData title="Teléfono fijo" icon="call" text={student.linePhone} />
          <StudentData title="Número de Celudar" icon="smartphone" text={student.cellPhone} />
        </div>
        <Divider text="Información técnica" />
        <div className="flex justify-between items-center w-full">
          <StudentData title="Legajo" icon="tag" text={`Legajo: ${student.legajo ?? "--"}`} />
          <StudentData title="Matricula" icon="contract" text={`Matricula: ${student.matricula}`} />
        </div>
        <Divider text="Certificados y discapacidad" />
        <div className="flex justify-between items-center w-full">
          <StudentDataWithCheck title="Certificado de buena salud" icon={student.health ? "check" : "close"} text="Buena salud" />
          <StudentDataWithCheck title="Discapacidad" icon={student.disability ? "check" : "close"} text="Discapacidad" />
        </div>
        <div className="flex justify-between items-center w-full">
          <StudentDataWithCheck title="" icon={student.birthCert ? "check" : "close"} text="P. Nacimiento" />
          <StudentDataWithCheck title="Certificado de Estudios" icon={student.studyCert ? "check" : "close"} text="Cer. Estudios" />
        </div>
      </article>
    </section>
  )
}
