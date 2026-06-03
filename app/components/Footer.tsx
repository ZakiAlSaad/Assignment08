"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">🧱 TileGallery</h3>
            <p className="text-gray-400">
              Discover your perfect aesthetic with our curated tile collection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/all-tiles" className="hover:text-white transition">
                  All Tiles
                </Link>
              </li>
              <li>
                <Link href="/my-profile" className="hover:text-white transition">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-blue-400 transition"
                rel="noreferrer"
              >
                f
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:text-blue-400 transition"
                rel="noreferrer"
              >
                𝕏
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-pink-400 transition"
                rel="noreferrer"
              >
                📷
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-blue-600 transition"
                rel="noreferrer"
              >
                in
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@tilegallery.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Design Street, NY 10001</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 TileGallery. All rights reserved. | Crafted with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
