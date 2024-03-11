"use server";

import { cookies } from "next/headers";
import { BASE_ACADEMIC_RECORDS_URL, ITEMS_PER_PAGE } from "../constants";
import { AcademicRecord, ApiResponse } from "../definitions";

export const getAllRecords = async (
  query: string = "",
  currentPage: number = 1
) => {
  const token = cookies().get("token")?.value ?? ""

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const response = await fetch(`${BASE_ACADEMIC_RECORDS_URL}/all?query=${query}&limit=${ITEMS_PER_PAGE}&offset=${offset}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data: ApiResponse<AcademicRecord[]> = await response.json();

  return data;
}

export const fetchAcademicTotalPages = async (query: string = "") => {
  const token = cookies().get("token")?.value ?? ""

  try {
    const response = await fetch(`${BASE_ACADEMIC_RECORDS_URL}/all/pages?query=${query}`,
      {
        cache: "no-cache",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )

    const count = await response.json() as number

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Fallo al buscar el total de registros academicos.');
  }
}