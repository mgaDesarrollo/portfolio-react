import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Zap, Briefcase } from "lucide-react"

const STATS = [
  { value: "+3", label: "años de experiencia" },
  { value: "+8", label: "proyectos realizados" },
  { value: "+11", label: "tecnologías dominadas" },
  { value: "100%", label: "responsive design" },
]

const SKILLS = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Java, PostgreSQL, API REST, Express.js, Prisma",
  },
  {
    icon: Zap,
    title: "Performance & DevOps",
    description: " Vercel, Git Flow, optimización web",
  },
  {
    icon: Briefcase,
    title: "Experiencia",
    description: "+15 proyectos · +3 años · React · Next.js · Node · PostgreSQL · Docker",
    highlight: true,
  },
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Sobre Mí</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Desarrollador Full Stack con <strong className="text-foreground">+3 años de experiencia</strong> construyendo aplicaciones
            web modernas. Especializado en React, Next.js y Node.js, con foco en código limpio,
            rendimiento y experiencia de usuario.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 max-w-4xl mx-auto">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl border bg-card hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skill cards — 2x2 on md, 4 cols on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((skill, index) => (
            <Card
              key={index}
              className={
                "w-full text-center hover:shadow-lg transition-shadow duration-300 " +
                (skill.highlight
                  ? "border-primary/40 bg-primary/5 dark:bg-primary/10"
                  : "")
              }
            >
              <CardContent className="p-6">
                <skill.icon
                  className={
                    "h-10 w-10 mx-auto mb-4 " +
                    (skill.highlight ? "text-primary" : "text-primary")
                  }
                />
                <h3 className="font-semibold text-base mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
