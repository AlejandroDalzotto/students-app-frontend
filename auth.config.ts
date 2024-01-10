
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/signin',
    newUser: '/signup'
  },
  callbacks: {},
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;