import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const base64Image = buffer.toString("base64")
    const imageUrl = `data:${file.type};base64,${base64Image}`

    return NextResponse.json({ url: imageUrl })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
