"use client";

import Link from "next/link";

interface Tile {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

export default function TileCard({ tile }: { tile: Tile }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
      <figure className="relative w-full h-48 overflow-hidden bg-gray-200">
        <div className="w-full h-full bg-gradient-to-br from-purple-300 to-blue-300 flex items-center justify-center">
          <span className="text-4xl">{tile.category.charAt(0).toUpperCase()}</span>
        </div>
      </figure>
      <div className="p-6">
        <h2 className="text-lg font-bold mb-2">{tile.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{tile.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-purple-600">
            ${tile.price}
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
            {tile.category}
          </span>
        </div>
        <Link href={`/tile/${tile.id}`} className="w-full block px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold text-center hover:bg-purple-700 transition">
          View Details
        </Link>
      </div>
    </div>
  );
}
