"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ProjectForm, type Project } from "./project-form"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project?: Project
  onSave: (project: Omit<Project, "id">) => void
}

export function ProjectModal({ isOpen, onClose, project, onSave }: ProjectModalProps) {
  const handleSave = (projectData: Omit<Project, "id">) => {
    onSave(projectData)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project ? "Editar Proyecto" : "Nuevo Proyecto"}</DialogTitle>
        </DialogHeader>
        <ProjectForm project={project} onSave={handleSave} onCancel={onClose} />
      </DialogContent>
    </Dialog>
  )
}
