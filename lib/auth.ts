
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


import { betterAuth } from "better-auth";
import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI || "";

export const auth = betterAuth({
  database: {
    db: mongoose,
    table: "users",
  },
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
});


