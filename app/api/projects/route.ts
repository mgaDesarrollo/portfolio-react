import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  const projects = await prisma.project.findMany()
  return NextResponse.json(projects)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    // Convertir array de tecnologías a string si existe
    if (Array.isArray(data.technologies)) {
      data.technologies = data.technologies.join(",")
    }
    const project = await prisma.project.create({
      data,
    })
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  const data = await request.json()
  const { id, ...rest } = data
  const project = await prisma.project.update({
    where: { id },
    data: rest,
  })
  return NextResponse.json(project)
}

export async function DELETE(request: Request) {
  const { id } = await request.json()
  await prisma.project.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
