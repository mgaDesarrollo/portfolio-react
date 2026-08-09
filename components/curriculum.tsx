"use client"

import { Download, Mail, Phone, Github, Globe, Linkedin, ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Curriculum() {
  const router = useRouter()
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme("light")
  }, [setTheme])

  // Forzar tema claro al imprimir (si está en modo oscuro lo quita temporalmente)
  useEffect(() => {
    const root = document.documentElement
    const before = () => {
      if (root.classList.contains('dark')) {
        root.dataset._wasDark = '1'
        root.classList.remove('dark')
      }
    }
    const after = () => {
      if (root.dataset._wasDark === '1') {
        root.classList.add('dark')
        delete root.dataset._wasDark
      }
    }
    window.addEventListener('beforeprint', before)
    window.addEventListener('afterprint', after)
    return () => {
      window.removeEventListener('beforeprint', before)
      window.removeEventListener('afterprint', after)
    }
  }, [])

  const handlePrint = () => {
    const root = document.documentElement
    const wasDark = root.classList.contains('dark')
    if (wasDark) root.classList.remove('dark')
    setTimeout(() => {
      window.print()
      if (wasDark) root.classList.add('dark')
    }, 30)
  }

  const [cvImageSrc, setCvImageSrc] = useState("/profile.jpg")
  const [imgError, setImgError] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-black p-8 cv-root">
      <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-none rounded-none overflow-visible">
        {/* Header */}
        <div className="bg-white dark:bg-black text-black dark:text-white p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            {/* Bloque Izquierdo con Avatar + Datos */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="relative mx-auto sm:mx-0 h-44 w-44 print:h-36 print:w-36 overflow-hidden rounded-none">
                <Image
                  src="/profile-cv.jpg"
                  alt="Foto de perfil de Mario Gabriel Avendaño"
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                  style={{
                    objectPosition: '50% 20%',
                    transform: 'scale(1.15)',
                    transformOrigin: '50% 20%'
                  }}
                />
              </div>
              <div>
                <h1 className="text-3xl font-mono font-bold mb-2 dark:text-white print:mb-1">Mario Gabriel Avendaño</h1>
                <h2 className="text-lg font-light opacity-90 dark:text-white print:text-xs print:opacity-100">Desarrollador Full Stack Junior | React · Next.js · Node.js · PostgreSQL</h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs print:mt-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary print:text-black" />
                    <a href="mailto:mariogabriel.dvlp@gmail.com" className="hover:underline">mariogabriel.dvlp@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary print:text-black" />
                    <a href="tel:+543516503188" className="hover:underline">+54 351 650 3188</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-primary print:text-black" />
                    <a href="https://github.com/mgaDesarrollo" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/mgaDesarrollo</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-primary print:text-black" />
                    <a href="https://www.linkedin.com/in/mario-gabriel-avenda%C3%B1o-4334a02a5/" target="_blank" rel="noopener noreferrer" className="hover:underline">https://www.linkedin.com/in/mario-gabriel-avendaño-4334a02a5/</a>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <Globe className="h-4 w-4 text-primary print:text-black" />
                    <a href="https://portfolio-react-orcin-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">https://portfolio-react-orcin-rho.vercel.app/</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Controles (ocultos en impresión) */}
            <div className="flex items-center gap-2 self-start print:hidden">
              <Button onClick={() => router.back()} variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-1" /> Volver
              </Button>
              <Button onClick={handlePrint} variant="secondary" size="sm">
                <Download className="w-4 h-4 mr-2" /> PDF
              </Button>
            </div>
          </div>
        </div>
        {/* Perfil Profesional */}
        <section className="p-8">
          <h3 className="text-xl font-mono font-bold mb-3 border-b pb-1 dark:text-white">Perfil Profesional</h3>
          <p className="text-sm leading-relaxed dark:text-white">
            Desarrollador Frontend orientado a React y Next.js, con experiencia en desarrollo de aplicaciones web y proyectos freelance. Trabajo con JavaScript/TypeScript, React, Next.js, Node.js y PostgreSQL, integrando APIs y bases de datos.
          </p>
          <p className="text-sm leading-relaxed dark:text-white mt-3">
            Experiencia trabajando de forma independiente en proyectos completos, desde el desarrollo de interfaces y funcionalidades hasta la integración con backend y despliegue. Actualmente enfocado en incorporarme a un equipo de desarrollo donde pueda aportar y seguir creciendo profesionalmente.
          </p>
        </section>
        {/* Experiencia Laboral */}
        <section className="p-8">
          <h3 className="text-xl font-mono font-bold mb-3 border-b pb-1 dark:text-white">Experiencia Laboral</h3>
          <div className="mb-5">
            <h4 className="text-base font-semibold dark:text-white">Desarrollador de Software | SingularityNET</h4>
            <span className="text-xs opacity-80">mayo de 2025 - actualidad</span>
            <ul className="list-disc ml-6 mt-1.5 text-xs dark:text-white">
              <li>Desarrollo de funcionalidades para una aplicación de consenso y gobernanza digital sobre el ecosistema descentralizado de SingularityNET.</li>
              <li>Implementación de interfaces de usuario interactivas y dinámicas utilizando Next.js y React.</li>
              <li>Integración de servicios y APIs para gestionar la lógica de consenso y toma de decisiones de la comunidad.</li>
              <li>Colaboración en la integración de soluciones basadas en Inteligencia Artificial y tecnologías descentralizadas.</li>
              <li>Trabajo colaborativo con control de versiones mediante Git y GitHub.</li>
            </ul>
          </div>
          <div className="mb-5">
            <h4 className="text-base font-semibold dark:text-white">Desarrollador Frontend Freelance</h4>
            <span className="text-xs opacity-80">enero de 2025 - actualidad</span>
            <ul className="list-disc ml-6 mt-1.5 text-xs dark:text-white">
              <li>Desarrollo de aplicaciones web utilizando React, Next.js y JavaScript/TypeScript.</li>
              <li>Implementación de interfaces responsive y componentes reutilizables con Tailwind CSS.</li>
              <li>Integración de APIs y servicios backend para el flujo de datos.</li>
              <li>Desarrollo de funcionalidades completas desde el diseño hasta el deployment.</li>
              <li>Optimización de rendimiento, UX y adaptación responsive.</li>
              <li>Gestión de código y versiones utilizando Git y GitHub.</li>
              <li>Algunos proyectos desarrollados se encuentran disponibles en mi portfolio.</li>
            </ul>
          </div>
          <div className="mb-5">
            <h4 className="text-base font-semibold dark:text-white">Técnico de Soporte a Usuarios | Flexxus</h4>
            <span className="text-xs opacity-80">agosto de 2020 - noviembre de 2020</span>
            <ul className="list-disc ml-6 mt-1.5 text-xs dark:text-white">
              <li>Ofrecí soporte técnico integral a clientes del sistema ERP Flexxus, resolviendo incidencias de forma remota y telefónica.</li>
              <li>Gestioné la configuración e instalación de software, incluyendo puestos de trabajo y impresoras fiscales.</li>
              <li>Realicé el mantenimiento y la migración de bases de datos de clientes para asegurar la integridad y el rendimiento del sistema.</li>
              <li>Coordiné las actualizaciones de software, minimizando el impacto en las operaciones de los clientes.</li>
            </ul>
          </div>
          <div className="mb-5">
            <h4 className="text-base font-semibold dark:text-white">Soporte Técnico a Clientes | Telmex</h4>
            <span className="text-xs opacity-80">enero de 2011 - enero de 2012</span>
            <ul className="list-disc ml-6 mt-1.5 text-xs dark:text-white">
              <li>Proporcioné asistencia técnica especializada a clientes de servicios de banda ancha, resolviendo problemas de conectividad y configuración.</li>
              <li>Aseguré una alta satisfacción del cliente a través de una comunicación clara y la resolución eficaz de problemas.</li>
            </ul>
          </div>
        </section>
        {/* Educación */}
        <section className="p-8">
          <h3 className="text-xl font-mono font-bold mb-3 border-b pb-1 dark:text-white">Educación</h3>
          <div className="space-y-3">
            <div className="border-l-4 pl-6">
              <div className="flex justify-between items-start mb-1.5">
                <h4 className="text-base font-semibold dark:text-white">Técnico Superior en Programación | UTN</h4>
                <span className="text-xs">2015 · (falta solo tesis)</span>
              </div>
              <p className="text-xs font-medium">Programación informática, enfoque en desarrollo de software y soluciones técnicas.</p>
            </div>
            <div className="border-l-4 pl-6">
              <div className="flex justify-between items-start mb-1.5">
                <h4 className="text-base font-semibold dark:text-white">Plan 111mil de programación</h4>
                <span className="text-xs">2016</span>
              </div>
              <p className="text-xs font-medium">Curso de programación del gobierno, 1 año de duración. POO, Java, SQL.</p>
            </div>
            <div className="border-l-4 pl-6">
              <div className="flex justify-between items-start mb-1.5">
                <h4 className="text-base font-semibold dark:text-white">Técnico en reparación de PC | Academia Santo Domingo</h4>
                <span className="text-xs">2012 - 2013</span>
              </div>
              <p className="text-xs font-medium">Curso de reparación de PC y configuración de redes.</p>
            </div>
          </div>
        </section>
        {/* Habilidades Técnicas */}
        <section className="p-8">
          <h3 className="text-xl font-mono font-bold mb-3 border-b pb-1 dark:text-white">Habilidades Técnicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Frontend</h4>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map(skill => (
                  <span key={skill} className="px-2.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded-full text-xs font-mono dark:text-white">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Backend</h4>
              <div className="flex flex-wrap gap-1.5">
                {['Node.js', 'Java', 'PostgreSQL', 'Express.js', 'Prisma'].map(skill => (
                  <span key={skill} className="px-2.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded-full text-xs font-mono dark:text-white">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Metodologías</h4>
              <div className="flex flex-wrap gap-1.5">
                {['Scrum', 'Agile', 'Git Flow'].map(skill => (
                  <span key={skill} className="px-2.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded-full text-xs font-mono dark:text-white">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Herramientas</h4>
              <div className="flex flex-wrap gap-1.5">
                {['Git', 'GitHub', 'VS Code'].map(skill => (
                  <span key={skill} className="px-2.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded-full text-xs font-mono dark:text-white">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Idiomas (compacto) */}
        <section className="px-8 pb-4 pt-0 print:pt-0">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <h3 className="text-sm font-mono font-semibold m-0 dark:text-white border-none p-0">Idiomas:</h3>
            <span className="dark:text-white">Español (Nativo)</span>
            <span className="opacity-60">|</span>
            <span className="dark:text-white">Inglés (Básico)</span>
          </div>
        </section>
      </div>
      <style jsx global>{`
        @media print {
          @page { size: A4 portrait; margin: 10mm; }
          html, body, #__next, .cv-root {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background: #fff !important;
          }
          /* Neutralizar posibles fondos oscuros heredados */
          .dark & { background: #fff !important; }
          .dark .cv-root { background: #fff !important; }
          .dark .cv-root * { background-color: transparent !important; }
          body, .cv-root { font-size: 10px !important; line-height: 1.25; }
          .cv-root .p-8 { padding: 18px !important; }
          section.p-8 { padding: 14px 18px !important; }
          .cv-root h1 { font-size: 18pt !important; margin-bottom: 4px !important; }
          .cv-root h2 { font-size: 10pt !important; margin-bottom: 6px !important; }
          .cv-root h3 { font-size: 10pt !important; margin-bottom: 6px !important; }
          .cv-root h4 { font-size: 9pt !important; margin-bottom: 2px !important; }
          .cv-root p, .cv-root li, .cv-root span { font-size: 8.5pt !important; }
          .cv-root ul { margin: 2px 0 6px 0 !important; }
          .cv-root .mb-5 { margin-bottom: 10px !important; }
          .cv-root .mt-1.5 { margin-top: 4px !important; }
          .cv-root .space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 10px !important; }
          /* Badges más compactas */
          .cv-root span.rounded-full { padding: 2px 6px !important; font-size: 8pt !important; }
          /* Ocultar controles no necesarios */
          .print\:hidden, .cv-root button, .cv-root [role="button"] { display: none !important; }
          /* Forzar texto negro */
          h1, h2, h3, h4, h5, h6, p, span, li, td, th, a { color: #000 !important; -webkit-text-fill-color: #000 !important; }
          * { box-shadow: none !important; text-shadow: none !important; }
        }
      `}</style>
    </div>
  )
}
