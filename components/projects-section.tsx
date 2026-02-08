"use client"
// Componente para comprimir y expandir la descripción
function ProjectDescription({ description }: { description: string }) {
  const [expanded, setExpanded] = useState(false)
  const maxLength = 120
  if (!description) return null
  const isLong = description.length > maxLength
  const shortText = isLong ? description.slice(0, maxLength) + "..." : description
  return (
    <>
      {expanded || !isLong ? description : shortText}
      {isLong && (
        <button
          type="button"
          className="ml-2 text-primary underline text-xs"
          onClick={() => setExpanded((e) => !e)}
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </>
  )
}

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Plus, Edit, Trash2 } from "lucide-react"
import { ProjectModal } from "./project-modal"
import type { Project } from "./project-form"

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | undefined>()
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Obtener proyectos desde la API
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]))

    // Verificar autenticación
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (data.authenticated) setIsAuthenticated(true)
      })
      .catch(() => setIsAuthenticated(false))
  }, [])

  // Eliminar lógica de localStorage

  const handleSaveProject = async (projectData: Omit<Project, "id">) => {
    try {
      if (editingProject) {
        // Actualizar proyecto en la base de datos
        const response = await fetch("/api/projects", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ ...projectData, id: editingProject.id }),
        })
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || "Error al actualizar proyecto")
        }
      } else {
        // Crear nuevo proyecto en la base de datos
        const response = await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(projectData),
        })
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || "Error al crear proyecto")
        }
      }
      // Recargar proyectos después de guardar
      const projectsResponse = await fetch("/api/projects")
      const data = await projectsResponse.json()
      setProjects(data)
      setIsModalOpen(false)
    } catch (error) {
      console.error("Error saving project:", error)
      alert(error instanceof Error ? error.message : "Error al guardar proyecto")
    } finally {
      setEditingProject(undefined)
    }
  }

  const handleEditProject = (project: Project) => {
    setEditingProject(project)
    setIsModalOpen(true)
  }

  const handleDeleteProject = async (projectId: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este proyecto?")) {
      try {
        const response = await fetch("/api/projects", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ id: projectId }),
        })
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || "Error al eliminar proyecto")
        }
        setProjects((prev) => prev.filter((p) => String(p.id) !== String(projectId)))
      } catch (error) {
        console.error("Error deleting project:", error)
        alert(error instanceof Error ? error.message : "Error al eliminar proyecto")
      }
    }
  }

  const handleNewProject = () => {
    setEditingProject(undefined)
    setIsModalOpen(true)
  }

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            {/* Título con efecto de iluminación */}
            <div className="relative">
              <h2 className="relative z-10 text-3xl sm:text-4xl font-bold text-foreground text-balance supports-[text-shadow]:[text-shadow:0_1px_0_rgba(0,0,0,0.25)] dark:supports-[text-shadow]:[text-shadow:0_1px_0_rgba(0,0,0,0.6)]">
                Mis Proyectos
              </h2>
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-x-8 -inset-y-2 bg-gradient-to-r from-emerald-400/25 via-emerald-300/8 to-emerald-500/25 dark:from-emerald-400/30 dark:via-emerald-300/12 dark:to-emerald-500/30 blur-2xl opacity-25"
              />
            </div>
            {isAuthenticated && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAdminMode(!isAdminMode)}
                className="text-xs relative z-10"
              >
                {isAdminMode ? "Modo Vista" : "Modo Admin"}
              </Button>
            )}
          </div>
          {/* Descripción con iluminación sutil para no competir con las tarjetas */}
          <p className="relative text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            <span className="relative z-10 supports-[text-shadow]:[text-shadow:0_1px_0_rgba(0,0,0,0.18)] dark:supports-[text-shadow]:[text-shadow:0_1px_0_rgba(0,0,0,0.5)]">
              Una selección de mis trabajos más recientes, donde combino diseño moderno con funcionalidad robusta para
              crear experiencias web excepcionales.
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-x-10 -top-2 -bottom-2 bg-gradient-to-r from-emerald-400/20 via-emerald-300/6 to-emerald-500/20 dark:from-emerald-400/24 dark:via-emerald-300/8 dark:to-emerald-500/24 blur-3xl opacity-16"
            />
          </p>

          {isAuthenticated && isAdminMode && (
            <Button onClick={handleNewProject} className="mt-6">
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Proyecto
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="h-full">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 relative w-full h-[500px] flex flex-col">
                {isAuthenticated && isAdminMode && (
                  <div className="absolute top-2 right-2 z-10 flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleEditProject(project)}
                      className="h-8 w-8 p-0"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteProject(project.id)}
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg?height=300&width=500&query=project screenshot"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="flex-0">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-pretty">
                    <ProjectDescription description={project.description} />
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(
                      typeof project.technologies === "string"
                        ? (project.technologies as string).split(",")
                        : Array.isArray(project.technologies)
                          ? (project.technologies as string[])
                          : []
                    ).map((tech: string, techIndex: number) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver Proyecto
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={editingProject}
        onSave={handleSaveProject}
      />
    </section>
  )
}
