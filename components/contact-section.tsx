"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Globe } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Contacto</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu idea y cómo podemos trabajar juntos para
            hacerla realidad.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Hablemos</h3>
              <p className="text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                Estoy siempre abierto a discutir nuevas oportunidades, proyectos interesantes o simplemente charlar
                sobre tecnología.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-2 border rounded-md py-3 px-4 bg-card/40 hover:shadow-sm transition-shadow">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:mariogabriel.dvlp@gmail.com" className="hover:underline">mariogabriel.dvlp@gmail.com</a>
              </div>
              <div className="flex items-center justify-center gap-2 border rounded-md py-3 px-4 bg-card/40 hover:shadow-sm transition-shadow">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+543516503188" className="hover:underline">+54 351 650 3188</a>
              </div>
              <div className="flex items-center justify-center gap-2 border rounded-md py-3 px-4 bg-card/40 hover:shadow-sm transition-shadow">
                <Github className="h-5 w-5 text-primary" />
                <a href="https://github.com/mgaDesarrollo" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/mgaDesarrollo</a>
              </div>
              <div className="flex items-center justify-center gap-2 border rounded-md py-3 px-4 bg-card/40 hover:shadow-sm transition-shadow">
                <Linkedin className="h-5 w-5 text-primary" />
                <a href="https://www.linkedin.com/in/gabriel-avendaño-4334a02a5" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn / Perfil</a>
              </div>
              <div className="flex items-center justify-center gap-2 border rounded-md py-3 px-4 bg-card/40 hover:shadow-sm transition-shadow">
                <Globe className="h-5 w-5 text-primary" />
                <a href="https://portfolio-react-3pol.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">Portfolio</a>
              </div>
              <div className="flex items-center justify-center gap-2 border rounded-md py-3 px-4 bg-card/40 hover:shadow-sm transition-shadow">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Córdoba, Argentina</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
