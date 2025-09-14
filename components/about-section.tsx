import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Zap } from "lucide-react"

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, PostgreSQL, API REST, Prisma",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimización y mejores prácticas",
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Sobre Mí</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Soy un desarrollador apasionado por crear soluciones web innovadoras. Con experiencia en tecnologías
            modernas, me enfoco en escribir código limpio, escalable y centrado en la experiencia del usuario.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto justify-items-center">
          {skills.map((skill, index) => (
            <Card key={index} className="w-full text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <skill.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 border">
          <h3 className="text-2xl font-bold mb-4 text-center">Mi Enfoque</h3>
          <p className="text-muted-foreground text-center max-w-4xl mx-auto text-pretty">
            Creo en la importancia de combinar un diseño atractivo con funcionalidad robusta. Cada proyecto es una
            oportunidad para aprender algo nuevo y crear algo excepcional. Mi objetivo es siempre entregar código de
            alta calidad que no solo funcione bien, sino que también sea mantenible y escalable.
          </p>
        </div>
      </div>
    </section>
  )
}
