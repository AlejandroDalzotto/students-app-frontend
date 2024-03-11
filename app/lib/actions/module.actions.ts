"use server";

import { cookies } from "next/headers";
import type { ApiResponse, Module } from "../definitions";
import { BASE_MODULE_URL } from "../constants";
import { revalidatePath } from "next/cache";

export const fetchModules = async (query: string = "", currentPage: number = 1) => {

  const token = cookies().get("token")?.value ?? "";
  const offset = (currentPage - 1) * 6;

  const response = await fetch(`${BASE_MODULE_URL}/all?query=${query}&limit=${6}&offset=${offset}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data: ApiResponse<Module[]> = await response.json();

  return data;
}

export const createModule = async (newEntry: unknown) => {
  const token = cookies().get("token")?.value ?? "";

  const response = await fetch(`${BASE_MODULE_URL}/save-module`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': "application/json"
    },
    method: "POST",
    body: JSON.stringify(newEntry),
  });

  const data: ApiResponse<Module> = await response.json();

  revalidatePath("/dashboard/modules")

  return data;
}

// For pagination

export const fetchModulesPages = async (query: string = ""): Promise<number> => {
  const token = cookies().get("token")?.value ?? "";

  const response = await fetch(`${BASE_MODULE_URL}/all/pages?query=${query}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const count = await response.json() as number

  const totalPages = Math.ceil(count / 6);

  return totalPages;
}