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
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
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

  const handleSaveProject = (projectData: Omit<Project, "id">) => {
    if (editingProject) {
      // Actualizar proyecto en la base de datos
      fetch("/api/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...projectData, id: editingProject.id }),
      })
        .then((res) => res.json())
        .then(() => {
          fetch("/api/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data))
        })
    } else {
      // Crear nuevo proyecto en la base de datos (sin id)
      const { id, ...dataToSend } = projectData as any
      fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      })
        .then((res) => res.json())
        .then(() => {
          fetch("/api/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data))
        })
    }
    setEditingProject(undefined)
  }

  const handleEditProject = (project: Project) => {
    setEditingProject(project)
    setIsModalOpen(true)
  }

  const handleDeleteProject = (projectId: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar este proyecto?")) {
      fetch("/api/projects", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: Number(projectId) }),
      })
        .then((res) => res.json())
        .then(() => {
          setProjects((prev) => prev.filter((p) => String(p.id) !== String(projectId)))
        })
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Mis Proyectos</h2>
            {isAuthenticated && (
              <Button variant="outline" size="sm" onClick={() => setIsAdminMode(!isAdminMode)} className="text-xs">
                {isAdminMode ? "Modo Vista" : "Modo Admin"}
              </Button>
            )}
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Una selección de mis trabajos más recientes, donde combino diseño moderno con funcionalidad robusta para
            crear experiencias web excepcionales.
          </p>

          {isAuthenticated && isAdminMode && (
            <Button onClick={handleNewProject} className="mt-6">
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Proyecto
            </Button>
          )}
        </div>

  <div className="relative max-w-6xl mx-auto">
          <Carousel opts={{ align: 'start' }}>
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="basis-full md:basis-1/2 xl:basis-1/3">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
