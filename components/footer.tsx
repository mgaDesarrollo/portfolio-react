import { Code2, Github, Linkedin, Mail, Globe, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-mono font-bold text-lg">Mario Gabriel Avendaño</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <a href="https://github.com/mgaDesarrollo" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <a href="https://www.linkedin.com/in/gabriel-avendaño-4334a02a5" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <a href="mailto:mariogabriel.dvlp@gmail.com">
                <Mail className="h-4 w-4" /> Email
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <a href="tel:+543516503188">
                <Phone className="h-4 w-4" /> Teléfono
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <a href="https://portfolio-react-3pol.vercel.app" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" /> Portfolio
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Mario Gabriel Avendaño. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm mt-2">Desarrollado con ❤️ usando Next.js y Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
