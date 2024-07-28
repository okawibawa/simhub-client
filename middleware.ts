import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get("user");
  const usidCookie = request.cookies.get("usid");

  const isLoginPage = request.nextUrl.pathname === "/login";
  const isRegisterPage = request.nextUrl.pathname === "/register";

  if ((!userCookie || !usidCookie) && !isLoginPage) {
    const response = NextResponse.redirect(new URL("/login", request.url));

    response.cookies.set("returnUrl", request.nextUrl.pathname, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 15 * 60,
    });

    return response;
  }

  if (userCookie && usidCookie && isLoginPage && isRegisterPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/esims/:path+/checkout/:id+",
    "/user/:path+",
    "/login",
    // "/((?!.*\\..*|_next).*)",
  ],
};
