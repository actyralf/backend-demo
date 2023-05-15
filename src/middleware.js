import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  response.headers.set("x-test", "test");
  return response;
}

export const config = {
  matcher: "/api/:path*",
};
