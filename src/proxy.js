import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const privateRoute = ["/mybookings", "/dashboard"];
const adminRoute = ["/dashboard"];

export async function proxy(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuthenticated = Boolean(token);

  const { pathname } = req.nextUrl;

  const isPrivateRoute = privateRoute.some((route) =>
    pathname.startsWith(route),
  );

  const isAdminRoute = adminRoute.some((route) => pathname.startsWith(route));

  // 🔐 Not logged in → redirect to login
  if (!isAuthenticated && isPrivateRoute) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${pathname}`, req.url),
    );
  }

  // 🚫 Logged in but not admin → block dashboard
  if (isAdminRoute && token?.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/mybookings/:path*", "/dashboard/:path*"],
};
