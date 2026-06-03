import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protected routes that require authentication
  const protectedRoutes = ["/my-profile", "/update-profile"];

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute) {
    // Check if user has a session (in a real app, this would verify a token/cookie)
    const sessionCookie = request.cookies.get("session");
    
    // If no session cookie, check localStorage (client-side only)
    // For now, we'll redirect to login if they don't have a session cookie
    if (!sessionCookie) {
      // Store the requested URL to redirect back after login
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: ["/my-profile/:path*", "/update-profile/:path*"],
};
