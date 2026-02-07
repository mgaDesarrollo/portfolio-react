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
  try {
    const data = await request.json()
    const { id, ...rest } = data
    // Convertir array de tecnologías a string si existe
    if (Array.isArray(rest.technologies)) {
      rest.technologies = rest.technologies.join(",")
    }
    // Asegurar que el ID sea un número
    const numericId = typeof id === "string" ? parseInt(id, 10) : id
    const project = await prisma.project.update({
      where: { id: numericId },
      data: rest,
    })
    return NextResponse.json(project)
  } catch (error) {
    console.error("Error updating project:", error)
    return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json()
    // Asegurar que el ID sea un número
    const numericId = typeof id === "string" ? parseInt(id, 10) : id
    await prisma.project.delete({ where: { id: numericId } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting project:", error)
    return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 })
  }
}
