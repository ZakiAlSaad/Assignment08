"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Tile {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  creator: string;
  style: string;
  tags: string[];
  dimensions: string;
  material: string;
  inStock: boolean;
}

export default function TileDetails() {
  const params = useParams();
  const [tile, setTile] = useState<Tile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tiles/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTile(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching tile:", error);
          setLoading(false);
        });
    }
  }, [params.id]);

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-center py-12">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading tile details...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!tile) {
    return (
      <main className="container mx-auto px-4 py-12">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Tile Not Found</h1>
          <Link href="/all-tiles" className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Back to All Tiles
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/all-tiles" className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          ← Back to All Tiles
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <div className="w-full bg-gradient-to-br from-purple-300 to-blue-300 rounded-lg aspect-square flex items-center justify-center">
            <span className="text-9xl opacity-50">
              {tile.category.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-5xl font-bold mb-4">{tile.title}</h1>

          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 font-semibold rounded-full text-sm">{tile.category}</span>
          </div>

          <p className="text-2xl font-bold text-purple-600 mb-6">${tile.price}</p>

          <p className="text-gray-700 text-lg mb-8">{tile.description}</p>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between">
              <span className="font-semibold">Creator:</span>
              <span>{tile.creator}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Style:</span>
              <span>{tile.style}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Material:</span>
              <span>{tile.material}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Dimensions:</span>
              <span>{tile.dimensions}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Status:</span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  tile.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {tile.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {tile.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 border-2 border-gray-300 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button
            disabled={!tile.inStock}
            className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {tile.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </main>
  );
}
