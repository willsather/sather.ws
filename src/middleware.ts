import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// temporary redirect for any old, lingering urls pointing to /experience
export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL("/work", req.url));
}

export const config = {
  matcher: ["/experience/:path*"],
};
