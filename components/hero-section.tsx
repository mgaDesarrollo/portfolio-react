"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState<string>("/profile.jpg")

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-24 md:pt-0 scroll-mt-24"
    >
      {/* Subtle gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      />
      
      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px]"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left column - Text content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase mb-4">
              Desarrollador Front-end
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-slate-100 leading-tight">
              Mario Gabriel{" "}
              <span className="text-slate-600 dark:text-slate-400">Avendaño</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              Especializado en crear aplicaciones web modernas con{" "}
              <span className="font-semibold text-slate-700 dark:text-slate-300">React</span>,{" "}
              <span className="font-semibold text-slate-700 dark:text-slate-300">Next.js</span> y{" "}
              <span className="font-semibold text-slate-700 dark:text-slate-300">PostgreSQL</span>.
              Transformo ideas en experiencias digitales excepcionales.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="font-medium bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900">
                <a href="mailto:mariogabriel.dvlp@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Contactar
                </a>
              </Button>
              <Button variant="outline" size="lg" className="font-medium border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800" asChild>
                <a href="/curriculum" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Ver CV
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/tuusuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/tuusuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right column - Profile image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Subtle ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 opacity-50 blur-sm" />
              
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50">
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-700" />
                )}
                {imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-semibold text-2xl">
                    MG
                  </div>
                )}
                <Image
                  src={imageSrc}
                  alt="Foto de perfil de Mario Gabriel Avendaño"
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 320px"
                  className={"object-cover transition-opacity duration-500 " + (imageLoaded ? 'opacity-100' : 'opacity-0')}
                  placeholder="blur"
                  onLoadingComplete={() => setImageLoaded(true)}
                  onError={() => {
                    if (!imageError) {
                      setImageError(true)
                      setImageSrc('/profile.jpg.jpg')
                    }
                  }}
                  blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAI0lEQVQoU2P8////fwYsgAmYMWPGP4ZlYGJgIBKMKqBiGA0GAAAbPhE9FzaEvQAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
