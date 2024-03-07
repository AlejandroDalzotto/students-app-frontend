"use server";

import { LoginSchema, RegisterSchema } from "@/schemas";
import { BASE_AUTH_URL } from "../constants";
import { cookies } from "next/headers";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { redirect } from "next/navigation";


export async function login(newEntry: any) {

  const { username, password } = newEntry

  try {
    await signIn("credentials", { username, password, redirectTo: DEFAULT_LOGIN_REDIRECT })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Credenciales incorrectas!" }
        default:
          return { error: "Algo a ido mal!" }
      }
    }

    throw error;
  }

}

export async function logout() {

  cookies().delete("username")
  cookies().delete("token")

  await signOut({ redirectTo: "/" });
}

export async function register(formData: FormData) {

  const rawUser = {
    name: formData.get("name"),
    lastname: formData.get("lastname"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  }

  const validatedFields = RegisterSchema.safeParse(rawUser);
  if (!validatedFields.success) {
    return { error: "Algunos campos son incorrectos!" };
  }

  const { username, password, email, lastname, name } = validatedFields.data

  try {

    await fetch(`${BASE_AUTH_URL}/register`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ username, password, email, lastname, name }),
    })

  } catch (error) {
    console.error({ error })
    throw error;
  }

  redirect("/signin")
}