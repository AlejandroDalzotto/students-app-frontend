"use server";

import { LoginSchema, RegisterSchema } from "@/schemas";
import { BASE_AUTH_URL } from "../constants";
import { cookies } from "next/headers";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { redirect } from "next/navigation";
import type { UserSignIn, UserSignUp } from "../definitions";


export async function login(newEntry: UserSignIn) {

  const { username, password } = newEntry

  try {
    await signIn("credentials", { username, password, redirectTo: DEFAULT_LOGIN_REDIRECT })

  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Credenciales incorrectas!" }
        default:
          return { message: "Algo a ido mal!" }
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

export async function register(newEntry: UserSignUp) {

  const { username, password, email, lastname, name } = newEntry

  try {

    await fetch(`${BASE_AUTH_URL}/register`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ username, password, email, lastname, name }),
    }).then(r => {
      if (!r.ok) {

        return { message: "Algo ha salido mal, por favor vuelve a intentarlo" }
      }
    })

  } catch (error) {
    console.error({ error })
    return { message: (error as Error).message }
  }

  redirect("/signin")
}