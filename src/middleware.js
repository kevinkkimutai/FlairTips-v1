import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect homepage `/` to `/all-matches`
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/all-matches", request.url));
  }

  // Define protected routes
  const protectedRoutes = ["/subscription", "/profile"];

  // Check if current route is protected
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  // Get token from cookies
  const token = request.cookies.get("next-auth.session-token")?.value 
             || request.cookies.get("__Secure-next-auth.session-token")?.value;

  console.log("Token in middleware:", token);

  // If no token and route is protected → redirect to login
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If user is already logged in and tries to visit login/forgot/reset pages → redirect them
  if (token && ["/login", "/forgot-password", "/reset-password"].includes(pathname)) {
    return NextResponse.redirect(new URL("/all-matches", request.url));
  }

  // Continue
  return NextResponse.next();
}

// Middleware config
export const config = {
  matcher: [
    "/",
    "/subscription",
    "/profile",
    "/login",
    "/forgot-password",
    "/reset-password",
    "/all-matches",
    "/((?!api|_next|favicon.ico).*)", // ignore api, _next, etc.
  ],
};
