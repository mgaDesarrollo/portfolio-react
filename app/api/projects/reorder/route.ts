import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function PATCH(request: Request) {
  try {
    const data = await request.json()
    // Se espera que data sea un array de objetos con { id: string | number, order: number }
    if (!Array.isArray(data)) {
      return NextResponse.json({ error: "Invalid data format" }, { status: 400 })
    }

    // Usamos $transaction para actualizar múltiples proyectos a la vez
    const updates = data.map((item) => {
      const numericId = typeof item.id === "string" ? parseInt(item.id, 10) : item.id
      return prisma.project.update({
        where: { id: numericId },
        data: { order: item.order },
      })
    })

    await prisma.$transaction(updates)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error reordering projects:", error)
    return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 })
  }
}
