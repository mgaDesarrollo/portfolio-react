import { Badge } from "@/components/ui/badge"

const EXPERIENCES = [
  {
    role: "Desarrollador Full Stack Freelance",
    company: "Proyectos independientes",
    period: "2023 – Actualidad",
    location: "Córdoba, Argentina · Remoto",
    description:
      "Desarrollo completo de aplicaciones web para clientes y proyectos propios. Desde el diseño de la arquitectura hasta el deploy en producción.",
    achievements: [
      "Desarrollo de dashboards administrativos con React y Next.js",
      "APIs REST con Node.js, Express y PostgreSQL",
      "Sistemas de gestión con autenticación JWT",
      "Deploy en Vercel, VPS y contenedores Docker",
      "Aplicaciones responsive con Tailwind CSS",
      "Integración con bases de datos relacionales y NoSQL",
    ],
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker", "JWT", "TypeScript"],
  },
  {
    role: "Desarrollador Frontend",
    company: "Proyectos académicos y personales",
    period: "2021 – 2023",
    location: "Córdoba, Argentina",
    description:
      "Formación autodidacta e intensiva en tecnologías modernas de desarrollo web. Construcción de proyectos progresivamente más complejos.",
    achievements: [
      "Aprendizaje de React y el ecosistema moderno de JavaScript",
      "Construcción de SPAs y aplicaciones con estado complejo",
      "Primeros proyectos con backend en Node.js",
      "Trabajo con bases de datos SQL y diseño de esquemas",
    ],
    tags: ["React", "JavaScript", "Node.js", "SQL", "HTML/CSS"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experiencia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trayectoria en desarrollo web, de proyectos personales a soluciones para clientes reales.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" aria-hidden />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background mt-2" aria-hidden />

                {/* Left — period (desktop only) */}
                <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-10 pt-1">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-muted-foreground">{exp.period}</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">{exp.location}</p>
                  </div>
                </div>

                {/* Right — content */}
                <div className="md:w-1/2 pl-10 md:pl-10">
                  {/* Mobile period */}
                  <p className="text-xs text-muted-foreground mb-1 md:hidden">{exp.period} · {exp.location}</p>

                  <div className="rounded-xl border bg-card p-5 hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-bold text-base text-foreground">{exp.role}</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-1.5 mb-4">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
