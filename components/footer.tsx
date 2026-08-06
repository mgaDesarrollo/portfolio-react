import { Code2, Github, Linkedin, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Brand + availability */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-mono font-bold text-lg">Mario Gabriel Avendaño</span>
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            React / Next.js · Full Stack Developer
          </p>
          <div className="flex items-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Actualmente buscando nuevas oportunidades · Disponible para trabajo remoto
          </div>
        </div>

        {/* Quick links */}
        <div className="flex justify-center gap-5">
          <a
            href="https://github.com/mgaDesarrollo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-avendaño-4334a02a5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="/curriculum"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Descargar CV"
          >
            <FileText className="h-4 w-4" /> Descargar CV
          </a>
        </div>

        {/* Tech badges */}
        <div className="text-center">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Tecnologías utilizadas en este portfolio
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "JWT Auth"].map((t) => (
              <Badge key={t} variant="outline" className="bg-background/40 backdrop-blur-sm text-xs">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-border text-center space-y-1">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mario Gabriel Avendaño. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-xs">Desarrollado con ❤️ y foco en performance y accesibilidad.</p>
        </div>
      </div>
    </footer>
  )
}
