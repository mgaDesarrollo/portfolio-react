"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const EXPERIENCES = [
  {
    role: "Desarrollador de Software",
    company: "SingularityNET",
    period: "Mayo 2025 – Abril 2026",
    location: "Remoto",
    description: "Desarrollo de funcionalidades para una aplicación web de gobernanza digital sobre el ecosistema descentralizado de SingularityNET.",
    achievements: [
      "Implementación de interfaces interactivas y componentes reutilizables.",
      "Desarrollo de funcionalidades utilizando JavaScript/TypeScript, React y Next.js.",
      "Integración de APIs y servicios para la gestión de datos.",
      "Trabajo con PostgreSQL y Prisma para persistencia.",
      "Mantenimiento de funcionalidades de autenticación y control de acceso.",
      "Participación en la integración de soluciones descentralizadas.",
    ],
    tags: ["React", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "Git"],
  },
  {
    role: "Desarrollador Full Stack Freelance",
    company: "Proyectos independientes",
    period: "Enero 2025 – Actualidad",
    location: "Remoto",
    description: "Desarrollo completo de aplicaciones web para clientes y proyectos propios. Desde el diseño de la arquitectura hasta el deploy en producción.",
    achievements: [
      "Desarrollo de aplicaciones web con React, Next.js y TypeScript.",
      "Creación de interfaces responsive con Tailwind CSS.",
      "Integración de APIs y servicios backend.",
      "Desarrollo de aplicaciones CRUD y sistemas de gestión.",
      "Optimización de interfaces y experiencia de usuario.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "APIs REST"],
  },
  {
    role: "Técnico de Soporte a Usuarios",
    company: "Flexxus",
    period: "Agosto 2020 – Noviembre 2020",
    location: "Córdoba, Argentina",
    description: "Soporte técnico integral a clientes del sistema ERP Flexxus.",
    achievements: [
      "Resolución de incidencias de manera remota y telefónica.",
      "Configuración e instalación de software e impresoras fiscales.",
      "Mantenimiento y actualización de bases de datos de clientes.",
      "Coordinación de actualizaciones de software.",
    ],
    tags: ["Soporte Técnico", "ERP", "Base de Datos", "Resolución de problemas"],
  },
  {
    role: "Soporte Técnico a Clientes",
    company: "Telmex",
    period: "Enero 2011 – Enero 2012",
    location: "Córdoba, Argentina",
    description: "Asistencia técnica especializada a clientes de servicios de banda ancha.",
    achievements: [
      "Diagnóstico y resolución de problemas de conectividad.",
      "Atención de consultas y resolución de incidencias técnicas.",
      "Comunicación directa con clientes para brindar soluciones.",
    ],
    tags: ["Soporte Técnico", "Conectividad", "Atención al Cliente"],
  }
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experiencia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trayectoria profesional combinando habilidades técnicas de desarrollo y resolución de problemas.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" aria-hidden />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-10 group"
              >
                {/* Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: (i * 0.15) + 0.3 }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background mt-2 shadow-[0_0_10px_rgba(var(--primary),0.5)] group-hover:scale-125 transition-transform" 
                  aria-hidden 
                />

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

                  <div className="rounded-xl border bg-card p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300 transform group-hover:-translate-y-1">
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
