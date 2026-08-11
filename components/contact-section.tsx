"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Phone, Github, Linkedin, Globe } from "lucide-react"
import { motion } from "framer-motion"

const AVAILABILITY = ["Remoto", "Híbrido", "Presencial", "Freelance", "Full-time"]

const LINKS = [
  { icon: Mail, label: "mariogabrielydlp@gmail.com", href: "mailto:mariogabrielydlp@gmail.com" },
  { icon: Phone, label: "+54 351 650 3188", href: "tel:+543516503188" },
  { icon: Github, label: "github.com/mgaDesarrollo", href: "https://github.com/mgaDesarrollo" },
  { icon: Linkedin, label: "LinkedIn / Perfil", href: "https://linkedin.com/in/mario-gabriel-avendaño-4334aa025/" },
  { icon: Globe, label: "Portfolio", href: "https://portfolio-react-onic-rho.vercel.app/" },
  { icon: MapPin, label: "Córdoba, Argentina", href: null },
]

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Contacto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            ¿Tenés un proyecto o una oportunidad laboral? Estoy disponible y listo para sumarme a tu equipo.
          </p>
        </motion.div>

        {/* Availability banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/20 p-6 mb-10 text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-700 dark:text-emerald-400">Disponible para trabajar (Presencial, Remoto, Híbrido)</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {AVAILABILITY.map((a, index) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              >
                <Badge
                  variant="outline"
                  className="border-emerald-400/50 text-emerald-700 dark:text-emerald-400 bg-emerald-100/50 dark:bg-emerald-900/30"
                >
                  {a}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <Button
            asChild
            size="lg"
            className="text-base font-semibold px-10 py-6 h-auto bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
          >
            <a href="mailto:mariogabrielydlp@gmail.com">
              Trabajemos juntos →
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            O escribime directamente por cualquiera de estos medios
          </p>
        </motion.div>

        {/* Contact links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {LINKS.map(({ icon: Icon, label, href }, index) =>
            href ? (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 border rounded-xl py-3 px-4 bg-card hover:shadow-md hover:border-primary/50 transition-all duration-200 group"
              >
                <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm truncate group-hover:text-primary transition-colors">{label}</span>
              </motion.a>
            ) : (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                className="flex items-center gap-3 border rounded-xl py-3 px-4 bg-card"
              >
                <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{label}</span>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
