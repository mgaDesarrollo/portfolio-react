const TECH_CATEGORIES = [
  {
    category: "Frontend",
    techs: [
      { name: "React", color: "text-cyan-500" },
      { name: "Next.js", color: "text-foreground" },
      { name: "TypeScript", color: "text-blue-500" },
      { name: "Tailwind CSS", color: "text-teal-500" },
      { name: "HTML5 / CSS3", color: "text-orange-500" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", color: "text-green-600" },
      { name: "Express.js", color: "text-foreground" },
      { name: "Java", color: "text-red-500" },
      { name: "Prisma ORM", color: "text-indigo-500" },
      { name: "REST APIs", color: "text-purple-500" },
    ],
  },
  {
    category: "Base de Datos",
    techs: [
      { name: "PostgreSQL", color: "text-blue-600" },
      { name: "MongoDB", color: "text-green-500" },
      { name: "SQL", color: "text-yellow-600" },
    ],
  },
  {
    category: "DevOps & Tools",
    techs: [
      { name: "Docker", color: "text-sky-500" },
      { name: "Git / GitHub", color: "text-orange-600" },
      { name: "Linux", color: "text-yellow-500" },
      { name: "Vercel", color: "text-foreground" },
      { name: "AWS", color: "text-yellow-600" },
    ],
  },
]

export function TechStackSection() {
  return (
    <section id="tecnologias" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Stack Tecnológico</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías que utilizo día a día para construir productos completos, desde el frontend hasta el deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-5">
                {cat.category}
              </h3>
              <ul className="space-y-3">
                {cat.techs.map((tech) => (
                  <li key={tech.name} className="flex items-center gap-3">
                    <span className={`h-2 w-2 rounded-full ${tech.color.replace("text-", "bg-")} flex-shrink-0`} />
                    <span className={`font-medium text-sm ${tech.color}`}>{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* "¿Qué puedo aportar?" block */}
        <div className="mt-12 rounded-2xl border bg-card p-8">
          <h3 className="text-xl font-bold text-center mb-6">¿Qué puedo aportar a tu empresa?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {[
              "Desarrollo Frontend con React y Next.js",
              "Backend con Node.js y PostgreSQL",
              "APIs REST escalables",
              "Optimización de rendimiento web",
              "Responsive Design en todos los dispositivos",
              "Clean Architecture y código mantenible",
              "Deploy en Vercel, VPS y Docker",
              "Autenticación JWT y seguridad",
              "Git Flow y trabajo en equipo",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
