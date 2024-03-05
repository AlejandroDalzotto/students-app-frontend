"use server";

import { cookies } from "next/headers";
import type { Module } from "../definitions";
import { BASE_MODULE_URL } from "../constants";

export const fetchModules = async (query: string = "", currentPage: number = 1): Promise<Module[]> => {

  const token = cookies().get("token")?.value ?? "";
  const offset = (currentPage - 1) * 6;

  const response = await fetch(`${BASE_MODULE_URL}/all?query=${query}&limit=${6}&offset=${offset}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data: Module[] = await response.json();

  return data;
}

export const createModule = async (formData: FormData): Promise<Module> => {
  const token = cookies().get("token")?.value ?? "";

  const rawModule = {
    name: formData.get("name"),
    course_name: formData.get("course_name"),
    start: formData.get("start"),
    finish: formData.get("finish"),
  }

  const response = await fetch(`${BASE_MODULE_URL}/save-module`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': "application/json"
    },
    body: JSON.stringify(rawModule),
    method: "POST",
  });

  const data: Module = await response.json();

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