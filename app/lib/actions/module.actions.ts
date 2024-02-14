"use server";

import { cookies } from "next/headers";
import { BASE_MODULE_URL } from "../constants";
import type { Module, ModuleRequest } from "../definitions";
import { revalidatePath } from "next/cache";

export const getModules = async (): Promise<Module[]> => {

  const token = cookies().get("token")?.value ?? ""

  const response = await fetch(`${BASE_MODULE_URL}/active`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const modules: Module[] = await response.json();

  return modules;
}

export const createModule = async (formData: FormData): Promise<void> => {

  const token = cookies().get("token")?.value ?? ""

  const rawModule: ModuleRequest = {
    name: formData.get("name")?.toString() ?? ""
  }

  const response = await fetch(`${BASE_MODULE_URL}/add`, {
    headers: {
      'Content-Type': "application/json",
      'Authorization': `Bearer ${token}`
    },
    method: "POST",
    body: JSON.stringify(rawModule)
  });

  revalidatePath("/dashboard/modules")
}