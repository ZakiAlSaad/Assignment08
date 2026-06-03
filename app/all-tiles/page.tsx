"use client";

import { useState, useEffect } from "react";
import TileCard from "@/app/components/TileCard";

interface Tile {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

export default function AllTiles() {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [filteredTiles, setFilteredTiles] = useState<Tile[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch all tiles
    fetch("/api/tiles")
      .then((res) => res.json())
      .then((data) => {
        setTiles(data);
        setFilteredTiles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tiles:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter tiles based on search
    if (search) {
      setFilteredTiles(
        tiles.filter((tile) =>
          tile.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredTiles(tiles);
    }
  }, [search, tiles]);

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">All Tiles Gallery</h1>
        <p className="text-gray-600 text-lg mb-8">
          Explore our complete collection of premium tiles
        </p>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search tiles by title..."
            className="w-full max-w-md px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Tiles Grid */}
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading tiles...</p>
          </div>
        </div>
      ) : filteredTiles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No tiles found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      )}
    </main>
  );
}
