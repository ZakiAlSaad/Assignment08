"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export default function MyProfile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user session
    const sessionData = localStorage.getItem("session");
    if (sessionData) {
      setUser(JSON.parse(sessionData));
    } else {
      router.push("/login");
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-center py-12">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">My Profile</h1>

        <div className="card bg-white shadow-xl overflow-hidden">
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-md">
                {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
            </div>

            <div className="flex-1 w-full">
              <h2 className="text-2xl font-bold">{user?.name}</h2>
              <p className="text-gray-600 mb-4">{user?.email}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-xs text-gray-500">Name</p>
                  <p className="font-medium">{user?.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-medium break-words">{user?.email}</p>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/update-profile" className="btn btn-primary">
                  Update Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
