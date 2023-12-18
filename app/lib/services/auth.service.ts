import type { UserSignUp } from "../definitions"

export const signUp = async ({ username, password, email, name, lastname }: UserSignUp) => {
  try {

    const res = await fetch(`/register`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        name,
        email,
        lastname,
        roles: []
      })
    })
  } catch (error) {
    console.error((error as Error).message)
    return (error as Error).message
  }
}

// export const logOut = async () => {

// }