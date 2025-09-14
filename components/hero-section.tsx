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

  // Parallax state
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setOffset(y * 0.15) // ajuste velocidad
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Pattern grid background responsive to theme */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary/15),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,theme(colors.primary/25),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 mix-blend-multiply dark:mix-blend-normal bg-[linear-gradient(theme(colors.primary/10)_1px,transparent_1px),linear-gradient(90deg,theme(colors.primary/10)_1px,transparent_1px)] [background-size:40px_40px]"
      />
      <div className="absolute inset-0 bg-white/65 dark:bg-black/80 backdrop-blur-[2px]" aria-hidden />
      {/* Gradient accent blobs */}
  <div aria-hidden style={{ transform: `translate3d(${offset * 0.4}px, ${offset * -0.3}px, 0)` }} className="transition-transform duration-300 will-change-transform absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-emerald-400/40 via-emerald-500/20 to-transparent blur-3xl opacity-70 dark:opacity-40" />
  <div aria-hidden style={{ transform: `translate3d(${offset * -0.35}px, ${offset * 0.25}px, 0)` }} className="transition-transform duration-300 will-change-transform absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-emerald-500/30 via-teal-400/10 to-transparent blur-3xl opacity-60 dark:opacity-35" />
      {/* Animated beam */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-full w-[140px] -translate-x-1/2 bg-gradient-to-b from-emerald-400/15 via-emerald-300/0 to-transparent blur-2xl animate-pulse" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          {/* Logo above main title */}
          <div className="flex flex-col items-center justify-center mb-8">
            <Code2 className="h-16 w-16 sm:h-20 sm:w-20 text-primary drop-shadow" aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-balance font-mono min-h-[1.2em] relative">
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 dark:from-emerald-300 dark:via-emerald-400 dark:to-emerald-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-[gradient-move_6s_linear_infinite] drop-shadow-sm">
              {displayedText}
            </span>
            <span className="animate-pulse text-emerald-400">|</span>
          </h1>
          <p className="relative text-xl sm:text-2xl text-muted-foreground mb-6 text-balance">
            <span className="relative z-10">Desarrollador Front-end</span>
            <span aria-hidden className="pointer-events-none absolute inset-0 blur-xl opacity-25 bg-gradient-to-r from-emerald-400/40 via-emerald-300/20 to-emerald-500/40 animate-pulse" />
          </p>
          <p className="relative text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            <span className="relative z-10">
            Especializado en crear aplicaciones web modernas con{" "}
            <span className="text-primary font-semibold">React</span>,{" "}
            <span className="text-primary font-semibold">Next.js</span> y{" "}
            <span className="text-primary font-semibold">PostgreSQL</span>. Transformo ideas en experiencias digitales excepcionales y siempre estoy dispuesto a aprender nuevas tecnologías y afrontar nuevos retos.
            </span>
            <span aria-hidden className="pointer-events-none absolute -inset-x-8 -bottom-2 -top-2 blur-2xl opacity-15 bg-gradient-to-r from-emerald-400/30 via-emerald-300/10 to-emerald-500/30" />
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
