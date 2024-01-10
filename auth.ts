import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';;
import type { UserSignIn, User } from '@/app/lib/definitions';
import { cookies } from 'next/headers';
import { BASE_AUTH_URL } from './app/lib/constants';

async function login(data: UserSignIn): Promise<User | undefined> {
  try {
    const user = await fetch(
      `${BASE_AUTH_URL}/login`,
      {
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(data),
        method: "POST",
      }
    ).then(r => r.json()) as User;
    cookies().set("token", user.token)
    cookies().set("username", user.username)
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string().min(1), password: z.string().min(1) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await login({ username, password });
          if (!user) return null;

          return user;
        }

        return null;
      },
    }),
  ],
});