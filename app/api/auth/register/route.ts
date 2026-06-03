import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, photoUrl } = body;

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Name, email and password are required" },
        { status: 400 }
      );
    }

    // Mock user creation - in production, this would save to MongoDB
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      image: photoUrl || null,
    };

    const response = NextResponse.json(user, { status: 201 });
    
    // Set session cookie
    response.cookies.set("session", JSON.stringify(user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
