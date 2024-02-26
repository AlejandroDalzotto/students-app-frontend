"use server";

import { cookies } from "next/headers";
import { BASE_COURSE_URL } from "../constants";
import type { Course, CourseRequest, SimpleCourse } from "../definitions";
import { revalidatePath } from "next/cache";

export const getCourses = async (): Promise<Course[]> => {

  const token = cookies().get("token")?.value ?? ""

  const response = await fetch(`${BASE_COURSE_URL}/active`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const courses: Course[] = await response.json();

  return courses;
}

export const getSimpleCourses = async (): Promise<SimpleCourse[]> => {
  const token = cookies().get("token")?.value ?? "";

  const response = await fetch(`${BASE_COURSE_URL}/all-simple`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const simpleCourse: SimpleCourse[] = await response.json();

  return simpleCourse;
}

export const getSingleSimpleCourse = async (name: string): Promise<SimpleCourse> => {

  const token = cookies().get("token")?.value ?? "";

  const response = await fetch(`${BASE_COURSE_URL}/get-simple/${name}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const simpleCourse: SimpleCourse = await response.json();

  return simpleCourse;
}

export const createCourse = async (formData: FormData): Promise<void> => {

  const token = cookies().get("token")?.value ?? ""

  const rawModule: CourseRequest = {
    name: formData.get("name")?.toString() ?? ""
  }

  const response = await fetch(`${BASE_COURSE_URL}/add`, {
    headers: {
      'Content-Type': "application/json",
      'Authorization': `Bearer ${token}`
    },
    method: "POST",
    body: JSON.stringify(rawModule)
  });

  revalidatePath("/dashboard/courses")
}