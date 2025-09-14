import { Code2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-mono font-bold text-lg">Mario Gabriel Avendaño</span>
          </div>
        </div>

            <div className="mt-10 grid gap-6 text-center">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Tecnologías Utilizadas para esta Web</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline" className="bg-background/40 backdrop-blur-sm">Next.js</Badge>
                  <Badge variant="outline" className="bg-background/40 backdrop-blur-sm">React</Badge>
                  <Badge variant="outline" className="bg-background/40 backdrop-blur-sm">TypeScript</Badge>
                  <Badge variant="outline" className="bg-background/40 backdrop-blur-sm">Tailwind CSS</Badge>
                  <Badge variant="outline" className="bg-background/40 backdrop-blur-sm">Prisma</Badge>
                  <Badge variant="outline" className="bg-background/40 backdrop-blur-sm">PostgreSQL</Badge>
                  <Badge variant="outline" className="bg-background/40 backdrop-blur-sm">JWT Auth</Badge>
                  <Badge variant="outline" className="bg-background/40 backdrop-blur-sm">Copilot IA</Badge>

                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground">
                  © {new Date().getFullYear()} Mario Gabriel Avendaño. Todos los derechos reservados.
                </p>
                <p className="text-muted-foreground text-sm mt-2">Desarrollado con ❤️ y foco en performance y accesibilidad.</p>
              </div>
            </div>
      </div>
    </footer>
  )
}
