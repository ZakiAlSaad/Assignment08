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
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>

        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <div className="flex items-center mb-6">
              <div className="avatar placeholder mr-6">
                <div className="bg-primary text-primary-content rounded-full w-24">
                  <span className="text-3xl">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{user?.name}</h2>
                <p className="text-gray-600">{user?.email}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={user?.name || ""}
                  className="input input-bordered"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  className="input input-bordered"
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="card-actions justify-end p-6">
            <Link href="/update-profile" className="btn btn-primary">
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
