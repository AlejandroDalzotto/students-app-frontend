const COURSES = {
  1: "1er Año",
  2: "2do Año",
  3: "3er Año",
  4: "4to Año",
  5: "5to Año"
}

export const getCourseStringFromNumber = (num: 1 | 2 | 3 | 4 | 5): string => {
  return COURSES[num]
}

export const formatDateString = (date: string) => {

  const [year, month, day] = date.split("-")

  return `${day}/${month}/${year}`
}

export const calculateAge = (date: string | undefined): number => {

  if (date === undefined) {
    return 0
  }

  const today = new Date();
  const birthDate = new Date(date);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}