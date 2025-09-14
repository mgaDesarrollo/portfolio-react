import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "../../../../lib/prisma";

export async function GET() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET! ) as { userId: number };
    const user = await prisma.user.findUnique({ where: { id: payload.userId }, select: { id: true, username: true } });
    if (!user) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }
    return NextResponse.json({ authenticated: true, user });
  } catch (e) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
