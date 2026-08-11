"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, ArrowDown, ChevronRight, Circle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

const TECH_PILLS = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Prisma"
]

export function HeroSection() {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState<string>("/profile.jpg")

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20 md:pt-0 scroll-mt-24"
    >
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px]"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 py-16 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left column — Text content (protagonist) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Availability badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Disponible para nuevas oportunidades
            </motion.div>

            {/* Greeting + Role */}
            <p className="text-base font-medium text-slate-500 dark:text-slate-400 tracking-wide mb-2">
              Hola, soy Gabriel Avendaño
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-slate-900 dark:text-slate-100 leading-tight">
              React / Next.js{" "}
              <span className="text-slate-500 dark:text-slate-400 block mt-1">Full Stack Developer</span>
            </h1>

            {/* Concrete value proposition */}
            <div className="space-y-2 mb-8">
              <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                +3 años desarrollando aplicaciones con React, Next.js y Node.js.
              </p>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Experiencia construyendo dashboards, sistemas administrativos, APIs REST y aplicaciones escalables con excelente experiencia de usuario.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <Button
                asChild
                size="lg"
                className="font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900 group transition-all duration-300 transform hover:scale-105"
              >
                <a href="#proyectos">
                  Ver Proyectos
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-medium border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="/curriculum" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Ver CV
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="mailto:mariogabriel.dvlp@gmail.com">
                  Contactarme
                </a>
              </Button>
            </motion.div>

            {/* Tech pills row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500 dark:text-slate-400"
            >
              {TECH_PILLS.map((tech, i) => (
                <span key={tech} className="flex items-center gap-3">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{tech}</span>
                  {i < TECH_PILLS.length - 1 && (
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                  )}
                </span>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 mt-8"
            >
              <a
                href="https://github.com/mgaDesarrollo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-all duration-300 transform hover:-translate-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mario-gabriel-avenda%C3%B1o-4334a02a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-all duration-300 transform hover:-translate-y-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right column — Profile image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glow */}
              <div
                aria-hidden
                className="absolute -inset-4 bg-gradient-to-tr from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-85 transition-opacity duration-300"
              />
              {/* Offset decorative border */}
              <div
                aria-hidden
                className="absolute inset-0 border border-slate-300/60 dark:border-slate-700/60 rounded-[1.8rem] translate-x-3 translate-y-3 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300"
              />
              {/* Image card */}
              <div className="relative w-[220px] h-[275px] sm:w-[250px] sm:h-[312px] lg:w-[290px] lg:h-[362px] rounded-[1.8rem] overflow-hidden border-4 border-white dark:border-slate-950 bg-white dark:bg-slate-900 shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/80 transition-transform duration-300 group-hover:scale-[1.03]">
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-700" />
                )}
                {imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-bold text-3xl">
                    MG
                  </div>
                )}
                <Image
                  src={imageSrc}
                  alt="Foto de perfil de Mario Gabriel Avendaño"
                  fill
                  priority
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 250px, 290px"
                  className={"object-cover transition-opacity duration-500 " + (imageLoaded ? "opacity-100" : "opacity-0")}
                  placeholder="blur"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    if (!imageError) {
                      setImageError(true)
                      setImageSrc("/profile.jpg.jpg")
                    }
                  }}
                  blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAI0lEQVQoU2P8////fwYsgAmYMWPGP4ZlYGJgIBKMKqBiGA0GAAAbPhE9FzaEvQAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
