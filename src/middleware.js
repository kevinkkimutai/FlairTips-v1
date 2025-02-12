import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Public routes that do not require authentication
  const publickRoutes = ['/login', '/forgot-password', '/reset-password', '/all-matches','/', '/contact-us'];
 const privateRoutes = []

  // Check if the current route is public
  const isPrivateRoute = privateRoutes.includes(pathname);

  // Get the token from cookies (server-side)
  const token = request.cookies.get("access_token")?.value;

  console.log("Token in middleware:", token); // Debugging

  // If there's no token and the route is not public, redirect to login
  if (!token && isPrivateRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If the user is authenticated and tries to access login or other public auth pages, redirect to all-matches
  if (token && (pathname === '/login' || pathname === '/forgot-password' || pathname === '/reset-password')) {
    return NextResponse.redirect(new URL('/all-matches', request.url));
  }

  // Proceed with the request if no redirects are triggered
  return NextResponse.next();
}

// Config to apply the middleware to all routes except for API, static, and image paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
