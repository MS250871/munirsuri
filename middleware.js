import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow login page WITHOUT auth
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  const admin = req.cookies.get('admin');

  if (!admin) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  // block logged in users from accessing login page
  if (admin && pathname === '/admin/login') {
    return NextResponse.redirect(new URL('/admin', req.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};
