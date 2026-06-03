"use client";

import { ReactNode } from "react";

// Lightweight AuthProvider: project uses a mock auth system
// Avoid requiring `next-auth` package so builds won't fail
export function AuthProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
