"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Globe, Phone, Code2 } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Mario Gabriel Avendaño"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
          linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
          linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px, 40px 40px",
      }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          {/* Logo above main title */}
          <div className="flex flex-col items-center justify-center mb-8">
            <Code2 className="h-16 w-16 sm:h-20 sm:w-20 text-primary drop-shadow" aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4 text-balance font-mono min-h-[1.2em]">
            <span className="text-primary">{displayedText}</span>
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 text-balance">Desarrollador Front-end</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Especializado en crear aplicaciones web modernas con{" "}
            <span className="text-primary font-semibold">React</span>,{" "}
            <span className="text-primary font-semibold">Next.js</span> y{" "}
            <span className="text-primary font-semibold">PostgreSQL</span>. Transformo ideas en experiencias digitales excepcionales y siempre estoy dispuesto a aprender nuevas tecnologías y afrontar nuevos retos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="font-semibold">
            <a href="mailto:mariogabriel.dvlp@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Contactar
            </a>
          </Button>
          <Button variant="outline" size="lg" className="font-semibold bg-transparent" asChild>
            <a href="/curriculum" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> Ver CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
