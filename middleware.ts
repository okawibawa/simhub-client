import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userCookie = request.headers.get("cookie");
  const parsedCookies =
    userCookie &&
    userCookie
      .split(";")
      .map((cookie) => cookie.trim().split("="))
      .flat();

  console.log(parsedCookies);

  if (
    !parsedCookies ||
    (!parsedCookies?.includes("user") && !parsedCookies?.includes("usid"))
  ) {
    return Response.redirect("http://localhost:3000/login");
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/esims/:path/checkout/:id",
    "/user/:path",
    "/((?!.*\\..*|_next).*)",
  ],
};
