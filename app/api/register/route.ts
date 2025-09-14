import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'
import * as bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()
    if (!username || !password) {
      return NextResponse.json({ error: 'Faltan campos' }, { status: 400 })
    }
    const existing = await prisma.user.findUnique({ where: { username } })
    if (existing) {
      return NextResponse.json({ error: 'Usuario ya existe' }, { status: 409 })
    }
    const hashed = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({ data: { username, password: hashed } })
    return NextResponse.json({ id: user.id, username: user.username })
  } catch (e) {
    return NextResponse.json({ error: 'Error creando usuario' }, { status: 500 })
  }
}
