"use client";

import { useState, useEffect } from "react";
import Marquee from "./components/Marquee";
import TileCard from "./components/TileCard";
import Link from "next/link";

interface Tile {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

export default function Home() {
  const [featuredTiles, setFeaturedTiles] = useState<Tile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch featured tiles (first 4)
    fetch("/api/tiles")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedTiles(data.slice(0, 4));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tiles:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate__animated animate__fadeInDown">
            Discover Your Perfect Aesthetic
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate__animated animate__fadeInUp">
            Curated tile collection for modern spaces
          </p>
          <Link
            href="/all-tiles"
            className="btn btn-lg btn-primary animate__animated animate__fadeInUp"
          >
            Browse Now
          </Link>
        </div>
      </div>

      {/* Marquee */}
      <Marquee />

      {/* Featured Tiles Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-4 text-center">Featured Tiles</h2>
        <p className="text-center text-gray-600 mb-12">
          Explore our handpicked selection of premium tiles
        </p>

        {loading ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTiles.map((tile) => (
              <TileCard key={tile.id} tile={tile} />
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
          <p className="text-lg mb-8">
            Browse our complete collection and find the perfect tiles for your project
          </p>
          <Link href="/all-tiles" className="btn btn-lg btn-ghost text-white border-white hover:bg-white hover:text-purple-600">
            View All Tiles
          </Link>
        </div>
      </div>
    </main>
  );
}
