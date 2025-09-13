import { Code2, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-mono font-bold text-lg">Mario Gabriel Avendano</span>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Mario Gabriel Avendano. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm mt-2">Desarrollado con ❤️ usando Next.js y Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
