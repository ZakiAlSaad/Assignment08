import { NextRequest, NextResponse } from "next/server";
import tilesData from "@/lib/tiles-data.json";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const tile = tilesData.find((t) => t.id === id);

  if (!tile) {
    return NextResponse.json({ error: "Tile not found" }, { status: 404 });
  }

  return NextResponse.json(tile);
}
