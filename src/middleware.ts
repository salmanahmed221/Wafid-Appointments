import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { BASE_URL } from "./constant/constants";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("authToken"); // Adjust according to how you store auth state

  if (pathname.startsWith("/data") && !token) {
    // Redirect to login if not authenticated
    return NextResponse.redirect(new URL(`${BASE_URL}/login`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
