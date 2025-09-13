"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { X, Plus } from "lucide-react"

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

interface ProjectFormProps {
  project?: Project
  onSave: (project: Omit<Project, "id">) => void
  onCancel: () => void
}

export function ProjectForm({ project, onSave, onCancel }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    image: project?.image || "",
    liveUrl: project?.liveUrl || "",
    githubUrl: project?.githubUrl || "",
    technologies: project?.technologies || [],
  })
  const [newTech, setNewTech] = useState("")

  const handleAddTechnology = () => {
    if (newTech.trim() && !formData.technologies.includes(newTech.trim())) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, newTech.trim()],
      }))
      setNewTech("")
    }
  }

  const handleRemoveTechnology = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== tech),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.description) {
      onSave(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Título del Proyecto</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
          placeholder="Nombre del proyecto"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
          placeholder="Describe tu proyecto..."
          rows={4}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">URL de la Imagen</Label>
        <Input
          id="image"
          value={formData.image}
          onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
          placeholder="https://ejemplo.com/imagen.jpg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="liveUrl">Enlace del Proyecto</Label>
        <Input
          id="liveUrl"
          value={formData.liveUrl}
          onChange={(e) => setFormData((prev) => ({ ...prev, liveUrl: e.target.value }))}
          placeholder="https://mi-proyecto.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="githubUrl">Enlace de GitHub</Label>
        <Input
          id="githubUrl"
          value={formData.githubUrl}
          onChange={(e) => setFormData((prev) => ({ ...prev, githubUrl: e.target.value }))}
          placeholder="https://github.com/usuario/proyecto"
        />
      </div>

      <div className="space-y-2">
        <Label>Tecnologías</Label>
        <div className="flex gap-2">
          <Input
            value={newTech}
            onChange={(e) => setNewTech(e.target.value)}
            placeholder="Agregar tecnología"
            onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTechnology())}
          />
          <Button type="button" onClick={handleAddTechnology} size="sm">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {formData.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              {tech}
              <button
                type="button"
                onClick={() => handleRemoveTechnology(tech)}
                className="ml-1 hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="submit" className="flex-1">
          {project ? "Actualizar" : "Crear"} Proyecto
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} className="flex-1 bg-transparent">
          Cancelar
        </Button>
      </div>
    </form>
  )
}
