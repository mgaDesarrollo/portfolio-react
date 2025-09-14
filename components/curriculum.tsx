"use client"

import { Download, Mail, Phone, MapPin, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Curriculum() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-none rounded-none overflow-visible">
        {/* Header */}
        <div className="bg-white dark:bg-black text-black dark:text-white p-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-mono font-bold mb-2 dark:text-white">Mario Gabriel Avendano</h1>
              <h2 className="text-xl font-light opacity-90 dark:text-white">Desarrollador Full Stack</h2>
            </div>
            <Button onClick={handlePrint} variant="secondary" size="sm" className="print:hidden">
              <Download className="w-4 h-4 mr-2" />
              Descargar PDF
            </Button>
          </div>
        </div>
        {/* Perfil Profesional */}
        <section className="p-8">
          <h3 className="text-2xl font-mono font-bold mb-4 border-b-2 pb-2 dark:text-white">Perfil Profesional</h3>
          <p className="leading-relaxed dark:text-white">
            Desarrollador Full Stack con experiencia en React, Next.js y PostgreSQL. Especializado en crear
            aplicaciones web modernas y escalables con enfoque en la experiencia del usuario y las mejores prácticas
            de desarrollo. Apasionado por las tecnologías emergentes y el desarrollo de soluciones innovadoras.
          </p>
        </section>
        {/* Experiencia Laboral */}
        <section className="p-8">
          <h3 className="text-2xl font-mono font-bold mb-4 border-b-2 pb-2 dark:text-white">Experiencia Laboral</h3>
          <div className="space-y-6">
            <div className="border-l-4 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold dark:text-white">Desarrollador Full Stack Senior</h4>
                <span className="text-sm">2022 - Presente</span>
              </div>
              <p className="font-medium mb-2">Tech Solutions Inc.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Desarrollo de aplicaciones web con React y Next.js</li>
                <li>Implementación de APIs RESTful con Node.js</li>
                <li>Gestión de bases de datos PostgreSQL</li>
                <li>Colaboración en equipos ágiles usando metodologías Scrum</li>
              </ul>
            </div>
            <div className="border-l-4 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold dark:text-white">Desarrollador Frontend</h4>
                <span className="text-sm">2020 - 2022</span>
              </div>
              <p className="font-medium mb-2">Digital Agency Pro</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Creación de interfaces de usuario responsivas</li>
                <li>Optimización de rendimiento web</li>
                <li>Integración con APIs de terceros</li>
                <li>Mantenimiento y mejora de aplicaciones existentes</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Educación */}
        <section className="p-8">
          <h3 className="text-2xl font-mono font-bold mb-4 border-b-2 pb-2 dark:text-white">Educación</h3>
          <div className="space-y-4">
            <div className="border-l-4 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold dark:text-white">Ingeniería en Sistemas</h4>
                <span className="text-sm">2016 - 2020</span>
              </div>
              <p className="font-medium">Universidad Tecnológica Nacional</p>
            </div>
            <div className="border-l-4 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold dark:text-white">Certificación Full Stack Developer</h4>
                <span className="text-sm">2020</span>
              </div>
              <p className="font-medium">Platzi / FreeCodeCamp</p>
            </div>
          </div>
        </section>
        {/* Habilidades Técnicas */}
        <section className="p-8">
          <h3 className="text-2xl font-mono font-bold mb-4 border-b-2 pb-2 dark:text-white">Habilidades Técnicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-mono dark:text-white">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'PostgreSQL', 'MongoDB', 'Express.js', 'Prisma', 'Supabase'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-mono dark:text-white">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Herramientas</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'Vercel', 'AWS', 'Figma', 'VS Code'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-mono dark:text-white">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Metodologías</h4>
              <div className="flex flex-wrap gap-2">
                {['Scrum', 'Agile', 'TDD', 'CI/CD', 'Code Review', 'Git Flow'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-mono dark:text-white">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Proyectos Destacados */}
        <section className="p-8">
          <h3 className="text-2xl font-mono font-bold mb-4 border-b-2 pb-2 dark:text-white">Proyectos Destacados</h3>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold dark:text-white">E-commerce Platform</h4>
                <div className="flex gap-2">
                  <Globe className="w-4 h-4" />
                  <Github className="w-4 h-4" />
                </div>
              </div>
              <p className="mb-2">
                Plataforma de comercio electrónico completa con carrito de compras, procesamiento de pagos y panel de administración.
              </p>
              <div className="flex flex-wrap gap-1">
                {['React', 'Next.js', 'Stripe', 'PostgreSQL'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-xs rounded font-mono dark:text-white">{tech}</span>
                ))}
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold dark:text-white">Task Management App</h4>
                <div className="flex gap-2">
                  <Globe className="w-4 h-4" />
                  <Github className="w-4 h-4" />
                </div>
              </div>
              <p className="mb-2">
                Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones push.
              </p>
              <div className="flex flex-wrap gap-1">
                {['React', 'Socket.io', 'MongoDB', 'Express'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-xs rounded font-mono dark:text-white">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Idiomas */}
        <section className="p-8">
          <h3 className="text-2xl font-mono font-bold mb-4 border-b-2 pb-2 dark:text-white">Idiomas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <h4 className="font-semibold dark:text-white">Español</h4>
              <p>Nativo</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h4 className="font-semibold dark:text-white">Inglés</h4>
              <p>Intermedio-Avanzado</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h4 className="font-semibold dark:text-white">Portugués</h4>
              <p>Básico</p>
            </div>
          </div>
        </section>
      </div>
      <style jsx global>{`
        @media print {
          html, body, #__next, .min-h-screen, .max-w-4xl, .p-8, .rounded-lg, .rounded-none, .overflow-visible {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background: #fff !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          h1, h2, h3, h4, h5, h6, p, span, li, td, th, a, .font-bold, .font-semibold, .font-medium, .text-primary, .text-primary-foreground, .text-muted-foreground, .text-black, .text-white {
            color: #000 !important;
            opacity: 1 !important;
            -webkit-text-fill-color: #000 !important;
          }
          * {
            box-shadow: none !important;
            text-shadow: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  )
}
