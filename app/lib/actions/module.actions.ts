"use server";

import { cookies } from "next/headers";
import { BASE_MODULE_URL } from "../constants";
import type { DefaultError, Module } from "../definitions";

export const getModules = async (): Promise<Module[]> => {

  const token = cookies().get("token")?.value ?? ""

  const response = await fetch(`${BASE_MODULE_URL}/all`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const modules: Module[] = await response.json();

  return modules;
}