// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // on ne touche pas aux assets/_next/api/favicons etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".") // fichiers (ex: .png, .ico, .svg…)
  ) {
    return NextResponse.next();
  }

  const lower = pathname.toLowerCase();
  if (pathname !== lower) {
    const url = req.nextUrl.clone();
    url.pathname = lower;
    // garde les query params
    url.search = search;
    // 308/301 = SEO-friendly
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};