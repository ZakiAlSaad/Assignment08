
export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
}

export interface Session {
  user: User;
  token?: string;
}


import { betterAuth } from "better-auth/minimal";
import { dash } from "@better-auth/infra";
import { memoryAdapter } from "@better-auth/memory-adapter";
import type { BetterAuthOptions } from "@better-auth/core";

const memoryDB: Record<string, any[]> = {};

export const auth = betterAuth({
  database: (options: BetterAuthOptions) => memoryAdapter(memoryDB)(options),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL:
    process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_BETTER_AUTH_URL || process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
  plugins: [
    dash({
      apiKey: process.env.BETTER_AUTH_API_KEY || "",
    }),
  ],
});


