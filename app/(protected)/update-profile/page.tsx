"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export default function UpdateProfile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const sessionData = localStorage.getItem("session");
    if (sessionData) {
      const userData = JSON.parse(sessionData);
      setUser(userData);
      setFormData({
        name: userData.name || "",
        image: userData.image || "",
      });
    } else {
      router.push("/login");
    }
    setLoading(false);
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Update user profile
      const updatedUser = {
        ...user,
        name: formData.name,
        image: formData.image,
      };
      localStorage.setItem("session", JSON.stringify(updatedUser));
      toast.success("Profile updated successfully!");
      setTimeout(() => router.push("/my-profile"), 1000);
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

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
      <ToastContainer />
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link href="/my-profile" className="btn btn-ghost">
            ← Back to Profile
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">Update Information</h1>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  className="input input-bordered"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
                {formData.image && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Preview:</p>
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={formData.image} alt="Preview" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="card-actions justify-end">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => router.back()}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                >
                  {submitting ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    "Update Information"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
