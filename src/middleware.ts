import { NextRequest, NextResponse } from "next/server";

const isWIP = process.env.NEXT_PUBLIC_WIP === "true";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/wip")
  ) {
    return NextResponse.next();
  }

  if (isWIP) {
    return NextResponse.redirect(new URL("/wip", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
