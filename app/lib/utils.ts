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