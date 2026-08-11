"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Zap, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

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
    description: "Node.js, Express.js, PostgreSQL, APIs REST, Prisma",
  },
  {
    icon: Zap,
    title: "Herramientas & Conceptos",
    description: "Git, GitHub, VS Code, Vite, Diseño Responsive, CRUD, Autenticación",
  },
  {
    icon: Briefcase,
    title: "Experiencia",
    description: "Desarrollo de aplicaciones web orientadas a gobernanza digital y sistemas de gestión.",
    highlight: true,
  },
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Sobre Mí</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            <strong className="text-foreground">Desarrollador Frontend Junior especializado en React y Next.js</strong>, con experiencia práctica en el desarrollo de aplicaciones web y proyectos freelance. 
            Trabajo con JavaScript, TypeScript, React, Next.js, Node.js y PostgreSQL, desarrollando interfaces responsive, integrando APIs y conectando aplicaciones con bases de datos.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 max-w-4xl mx-auto"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="text-center p-4 rounded-xl border bg-card hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill cards — 2x2 on md, 4 cols on lg */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <Card
                className={
                  "h-full w-full text-center hover:shadow-lg transition-shadow duration-300 " +
                  (skill.highlight
                    ? "border-primary/40 bg-primary/5 dark:bg-primary/10"
                    : "")
                }
              >
                <CardContent className="p-6 h-full flex flex-col justify-center">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
