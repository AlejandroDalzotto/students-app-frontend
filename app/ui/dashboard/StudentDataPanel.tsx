import { getStudentById } from "@/app/lib/services/student.service"
import DataPanelPlaceholder from "../skeletons/DataPanelPlaceholder"
import { type Student } from "@/app/lib/definitions"
import Image from "next/image"
import { getCourseStringFromNumber } from "@/app/lib/utils"
import Divider from "./Divider"
import StudentData, { StudentDataWithCheck } from "./StudentData"

export default async function StudentDataPanel({ id }: { id?: string | number | null }) {
  if (!id) {
    return (
      <DataPanelPlaceholder />
    )
  }

  const student = await getStudentById(id) as Student

  return (
    <section className="relative rounded-lg gap-y-5 p-5 w-full h-full bg-black/5">
      <header className="w-full h-fit gap-5 items-center justify-between flex">
        <Image
          width={120}
          height={120}
          alt="Avatar"
          src={student.sex.toLowerCase() === "m" ? "/male_avatar.svg" : "/female_avatar.svg"}
        />

        <p className="text-3xl font-semibold text-start whitespace-nowrap">{student.name}, {student.lastName}</p>

        <span className="text-3xl font-semibold text-blue-500 whitespace-nowrap">{getCourseStringFromNumber(student.course)}</span>
      </header>
      <article className="flex flex-col flex-grow w-full gap-y-5 mt-10">
        <Divider text="Información personal" />
        <div className="flex justify-between items-center w-full">
          <StudentData title="Edad" icon="calendar_clock" text={student.age} />
          <StudentData title="Dirección" icon="description" text={student.address} />
        </div>
        <Divider text="Contácto" />
        <div className="flex justify-between items-center w-full">
          <StudentData title="Correo electronico" icon="mail" text={student.mail} />
        </div>
        <div className="flex justify-between items-center w-full">
          <StudentData title="Teléfono fijo" icon="call" text={student.linePhone ?? "--"} />
          <StudentData title="Número de Celudar" icon="smartphone" text={student.cellPhone ?? "--"} />
        </div>
        <Divider text="Información técnica" />
        <div className="flex justify-between items-center w-full">
          <StudentData title="Legajo" icon="tag" text={`Legajo: ${student.legajo}`} />
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
