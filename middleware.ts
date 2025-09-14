import { NextResponse, type NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

// Rutas y métodos protegidos
const PROTECTED_PREFIXES = ['/api/projects', '/api/upload']
const PROTECTED_METHODS = ['POST', 'PUT', 'DELETE']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const method = req.method

  const needsAuth = PROTECTED_PREFIXES.some(p => pathname.startsWith(p)) && PROTECTED_METHODS.includes(method)
  if (!needsAuth) return NextResponse.next()

  const token = req.cookies.get('token')?.value
  if (!token) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET!)
    return NextResponse.next()
  } catch {
    return NextResponse.json({ error: 'Token inválido' }, { status: 401 })
  }
}

export const config = {
  matcher: ['/api/:path*']
}
