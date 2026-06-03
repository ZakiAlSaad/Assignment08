"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useClient } from "@/lib/use-client";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { session, logout } = useClient();

  const handleLogout = async () => {
    // Clear session and redirect
    logout();
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold hover:opacity-80 transition"
        >
          🧱 TileGallery
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:opacity-80 transition">
            Home
          </Link>
          <Link href="/all-tiles" className="hover:opacity-80 transition">
            All Tiles
          </Link>
          {session ? (
            <>
              <Link href="/my-profile" className="hover:opacity-80 transition">
                My Profile
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-700 px-4 py-4 space-y-3">
          <Link href="/" className="block hover:opacity-80 transition">
            Home
          </Link>
          <Link href="/all-tiles" className="block hover:opacity-80 transition">
            All Tiles
          </Link>
          {session && (
            <>
              <Link href="/my-profile" className="block hover:opacity-80 transition">
                My Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold"
              >
                Logout
              </button>
            </>
          )}
          {!session && (
            <Link
              href="/login"
              className="block px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
