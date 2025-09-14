import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import jwt from "jsonwebtoken";
import * as bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
  }
  let valid = false
  // Intentar comparar como hash
  try {
    valid = await bcrypt.compare(password, user.password)
  } catch {
    valid = false
  }
  // Si no es hash válido y coincide en texto plano, migrar automáticamente
  if (!valid && user.password === password) {
    const newHash = await bcrypt.hash(password, 10)
    await prisma.user.update({ where: { id: user.id }, data: { password: newHash } })
    valid = true
  }
  if (!valid) return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: "1d" });
  const res = NextResponse.json({ success: true });
  res.cookies.set("token", token, { httpOnly: true, path: "/" });
  return res;
}
