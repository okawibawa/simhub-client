import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get("user");
  const usidCookie = request.cookies.get("usid");

  const isLoginPage = request.nextUrl.pathname === "/login";
  const isRegisterPage = request.nextUrl.pathname === "/register";

  if ((!userCookie || !usidCookie) && !isLoginPage) {
    return Response.redirect(new URL("/login", request.url));
  }

  if (userCookie && usidCookie && isLoginPage && isRegisterPage) {
    return Response.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/esims/:path/checkout/:id",
    "/user/:path",
    "/login",
    // "/((?!.*\\..*|_next).*)",
  ],
};
