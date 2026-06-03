import { NextRequest, NextResponse } from "next/server";
import tilesData from "@/lib/tiles-data.json";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search");

  let filtered = tilesData;

  if (search) {
    filtered = tilesData.filter((tile) =>
      tile.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return NextResponse.json(filtered);
}
