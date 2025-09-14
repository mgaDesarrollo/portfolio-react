"use client"

import { Download, Mail, Phone, MapPin, Github, Globe, Linkedin, Link } from "lucide-react"
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
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
            <div>
              <h1 className="text-4xl font-mono font-bold mb-2 dark:text-white">Mario Gabriel Avendaño</h1>
              <h2 className="text-xl font-light opacity-90 dark:text-white">Desarrollador Front-end</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:mariogabriel.dvlp@gmail.com" className="hover:underline">mariogabriel.dvlp@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+543516503188" className="hover:underline">+54 351 650 3188</a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-primary" />
                  <a href="https://github.com/mgaDesarrollo" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/mgaDesarrollo</a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-primary" />
                  <a href="https://www.linkedin.com/in/gabriel-avendaño-4334a02a5" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn / Perfil</a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <a href="https://portfolio-react-3pol.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">Portfolio Web</a>
                </div>
              </div>
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
            Desarrollador front-end con experiencia en React, Next.js y PostgreSQL. Especializado en crear
            aplicaciones web modernas y escalables con enfoque en la experiencia del usuario y las mejores prácticas
            de desarrollo. Apasionado por las tecnologías emergentes y el desarrollo de soluciones innovadoras.
          </p>
        </section>
        {/* Experiencia Laboral */}
        <section className="p-8">
          <h3 className="text-2xl font-mono font-bold mb-4 border-b-2 pb-2 dark:text-white">Experiencia Laboral</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold dark:text-white">Desarrollador de Software | SingularityNET</h4>
            <span className="text-sm opacity-80">mayo de 2025 - actualidad</span>
            <ul className="list-disc ml-6 mt-2 text-sm dark:text-white">
              <li>Participo en el desarrollo de una aplicación de consenso y gobernanza digital sobre la plataforma SingularityNET, un ecosistema de IA descentralizado.</li>
              <li>Colaboro en la implementación de soluciones con IA para optimizar la toma de decisiones y la gestión de la comunidad.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold dark:text-white">Desarrollador Frontend Freelance</h4>
            <span className="text-sm opacity-80">enero de 2025 - actualidad</span>
            <ul className="list-disc ml-6 mt-2 text-sm dark:text-white">
              <li>Desarrollo y mantengo proyectos web de forma independiente, gestionando el ciclo de vida completo de las aplicaciones.</li>
              <li>Colaboro con equipos freelance para entregar soluciones de alta calidad, con un enfoque en la experiencia de usuario y la optimización del rendimiento.</li>
              <li>Los proyectos más destacados se pueden ver en mi portafolio.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold dark:text-white">Técnico de Soporte a Usuarios | Flexxus</h4>
            <span className="text-sm opacity-80">agosto de 2020 - noviembre de 2020</span>
            <ul className="list-disc ml-6 mt-2 text-sm dark:text-white">
              <li>Ofrecí soporte técnico integral a clientes del sistema ERP Flexxus, resolviendo incidencias de forma remota y telefónica.</li>
              <li>Gestioné la configuración e instalación de software, incluyendo puestos de trabajo y impresoras fiscales.</li>
              <li>Realicé el mantenimiento y la migración de bases de datos de clientes para asegurar la integridad y el rendimiento del sistema.</li>
              <li>Coordiné las actualizaciones de software, minimizando el impacto en las operaciones de los clientes.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold dark:text-white">Soporte Técnico a Clientes | Telmex</h4>
            <span className="text-sm opacity-80">enero de 2011 - enero de 2012</span>
            <ul className="list-disc ml-6 mt-2 text-sm dark:text-white">
              <li>Proporcioné asistencia técnica especializada a clientes de servicios de banda ancha, resolviendo problemas de conectividad y configuración.</li>
              <li>Aseguré una alta satisfacción del cliente a través de una comunicación clara y la resolución eficaz de problemas.</li>
            </ul>
          </div>
        </section>
        {/* Educación */}
        <section className="p-8">
          <h3 className="text-2xl font-mono font-bold mb-4 border-b-2 pb-2 dark:text-white">Educación</h3>
          <div className="space-y-4">
            <div className="border-l-4 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold dark:text-white">Técnico Superior en Programación | UTN</h4>
                <span className="text-sm">(falta solo tesis)</span>
              </div>
              <p className="font-medium">Programación informática, enfoque en desarrollo de software y soluciones técnicas.</p>
            </div>
            <div className="border-l-4 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold dark:text-white">Plan 111mil de programación</h4>
                <span className="text-sm">2016</span>
              </div>
              <p className="font-medium">Curso de programación del gobierno, 1 año de duración. POO, Java, SQL.</p>
            </div>
            <div className="border-l-4 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold dark:text-white">Técnico en reparación de PC | Academia Santo Domingo</h4>
                <span className="text-sm">2012 - 2013</span>
              </div>
              <p className="font-medium">Curso de reparación de PC y configuración de redes.</p>
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
                {['Node.js', 'PostgreSQL', 'Express.js', 'Prisma'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-mono dark:text-white">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Herramientas</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Vercel', 'AWS', 'VS Code'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-mono dark:text-white">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Metodologías</h4>
              <div className="flex flex-wrap gap-2">
                {['Scrum', 'Agile', 'Git Flow'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-mono dark:text-white">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Idiomas */}
        <section className="p-8">
          <h3 className="text-2xl font-mono font-bold mb-4 border-b-2 pb-2 dark:text-white">Idiomas</h3>
          <div className="flex flex-row gap-4 justify-center">
            <div className="text-center p-4 border rounded-lg w-40">
              <h4 className="font-semibold dark:text-white">Español</h4>
              <p>Nativo</p>
            </div>
            <div className="text-center p-4 border rounded-lg w-40">
              <h4 className="font-semibold dark:text-white">Inglés</h4>
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
