"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useClient() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Fetch session from localStorage or API
    const stored = localStorage.getItem("session");
    if (stored) {
      try {
        setSession(JSON.parse(stored));
      } catch {
        setSession(null);
      }
    }
    setLoading(false);
  }, []);

  const logout = async () => {
    try {
      // Call logout API to clear server-side session
      await fetch("/api/auth/logout", {
        method: "POST",
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
    
    // Clear local storage
    localStorage.removeItem("session");
    setSession(null);
    router.push("/login");
  };

  return { session, loading, logout };
}
