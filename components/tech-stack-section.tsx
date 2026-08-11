"use client"

import { motion } from "framer-motion"

const TECH_CATEGORIES = [
  {
    category: "Frontend",
    techs: [
      { name: "React / Next.js", color: "text-cyan-500" },
      { name: "JavaScript", color: "text-yellow-500" },
      { name: "TypeScript", color: "text-blue-500" },
      { name: "Tailwind CSS", color: "text-teal-500" },
      { name: "HTML5 / CSS3", color: "text-orange-500" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", color: "text-[#339933]" },
      { name: "REST APIs", color: "text-[#FF4081]" },
    ],
  },
  {
    category: "Base de Datos",
    techs: [
      { name: "PostgreSQL", color: "text-blue-600" },
      { name: "Prisma", color: "text-indigo-500" },
      { name: "MySQL", color: "text-orange-600" },
      { name: "MongoDB", color: "text-green-500" },
    ],
  },
  {
    category: "Herramientas",
    techs: [
      { name: "Git / GitHub", color: "text-[#F05032]" },
      { name: "VS Code", color: "text-[#007ACC]" },
      { name: "Vite", color: "text-[#646CFF]" },
      { name: "Sentry", color: "text-[#362D59]" },
      { name: "Antigravity", color: "text-primary" },
    ],
  },
]

export function TechStackSection() {
  return (
    <section id="tecnologias" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Stack Tecnológico</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías que utilizo día a día para construir productos completos y escalables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="rounded-xl border bg-card p-6 hover:shadow-lg transition-all duration-300"
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
            </motion.div>
          ))}
        </div>

        {/* "¿Qué puedo aportar?" block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 rounded-2xl border bg-card p-8 hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl font-bold text-center mb-6">¿Qué puedo aportar a tu equipo?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {[
              "Desarrollo Frontend con React y Next.js",
              "Backend e integración de APIs REST",
              "Responsive Design y Componentes reutilizables",
              "Desarrollo de aplicaciones CRUD",
              "Sistemas de Autenticación y Control de acceso",
              "Gestión de bases de datos con PostgreSQL y Prisma",
              "Control de versiones mediante Git y GitHub",
              "Código limpio y optimización de interfaces",
              "Capacidad de resolución y trabajo en equipo",
            ].map((item, i) => (
              <motion.div 
                key={item} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + (i * 0.05) }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
