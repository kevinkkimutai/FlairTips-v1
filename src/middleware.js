import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

   // Redirect the homepage `/` to `/all-matches`
   if (pathname === "/") {
    return NextResponse.redirect(new URL('/all-matches', request.url));
  }
  // Routes that require authentication
  const protectedRoutes = ['/subscription', '/profile'];

  // Check if the current route requires authentication
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // Get the token from cookies (server-side)
  const token = request.cookies.get("access_token")?.value;

  console.log("Token in middleware:", token);

  // If there's no token and the route requires authentication, redirect to login
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If authenticated user tries to access login or password reset pages, redirect to dashboard
  if (token && ['/login', '/forgot-password', '/reset-password'].includes(pathname)) {
    return NextResponse.redirect(new URL('/all-matches', request.url));
  }

  // Proceed with the request if no redirects are triggered
  return NextResponse.next();
}

// Config to apply the middleware to all routes except API, static, and image paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
