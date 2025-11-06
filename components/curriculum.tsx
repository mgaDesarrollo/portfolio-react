"use client"

import { Download, Mail, Phone, Github, Globe, Linkedin, ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Curriculum() {
  const router = useRouter()

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
            <div className="flex flex-col sm:flex-row sm:it            // ...existing code...
                    <figure className="photo">
                      <img 
                        src="public\profile.jpg" 
                        alt="Foto de perfil de Mario Gabriel Avendaño" 
                      />
                    </figure>
            // ...existing code...ems-center gap-6">
              <div className="relative mx-auto sm:mx-0 print:h-28 print:w-28">
                <div className="relative h-32 w-32 print:h-28 print:w-28 rounded-full overflow-hidden border border-emerald-500/40 shadow shadow-emerald-500/10 print:border-gray-400 print:shadow-none">
                  <figure className="photo">
                    <img 
                      src="/profile.jpg" 
                      alt="Foto de perfil de Mario Gabriel Avendaño" 
                    />
                  </figure>
                </div>
                {/* Glow suave sólo en pantalla, no en print */}
                <span aria-hidden className="hidden print:hidden sm:block absolute -inset-1 rounded-full bg-emerald-400/20 blur-xl" />
              </div>
              <div>
                <h1 className="text-4xl font-mono font-bold mb-2 dark:text-white print:mb-1">Mario Gabriel Avendaño</h1>
                <h2 className="text-xl font-light opacity-90 dark:text-white print:text-base print:opacity-100">Desarrollador Front-end</h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm print:mt-2">
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
                    <a href="https://www.linkedin.com/in/gabriel-avendaño-4334a02a5" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn / Perfil</a>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <Globe className="h-4 w-4 text-primary print:text-black" />
                    <a href="https://portfolio-react-3pol.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">Portfolio Web</a>
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
              <ThemeToggle />
            </div>
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
                <span className="text-sm">2015 · (falta solo tesis)</span>
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
            <div> className="font-semibold mb-3">Herramientas</h4>
              <h4 className="font-semibold mb-3">Metodologías</h4>
              <div className="flex flex-wrap gap-2">.map(skill => (
                {['Scrum', 'Agile', 'Git Flow'].map(skill => (-800 rounded-full text-sm font-mono dark:text-white">{skill}</span>
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-mono dark:text-white">{skill}</span>
                ))}>
              </div>
            </div>
          </div> className="font-semibold mb-3">Backend</h4>
        </section>
        {/* Idiomas (compacto) */}js', 'Prisma'].map(skill => (
        <section className="px-8 pb-4 pt-0 print:pt-0">0 dark:bg-gray-800 rounded-full text-sm font-mono dark:text-white">{skill}</span>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <h3 className="text-base font-mono font-semibold m-0 dark:text-white border-none p-0">Idiomas:</h3>>
            <span className="dark:text-white">Español (Nativo)</span>
            <span className="opacity-60">|</span>
            <span className="dark:text-white">Inglés (Básico)</span> className="font-semibold mb-3">Herramientas</h4>
          </div>
        </section>.map(skill => (
      </div>ay-200 dark:bg-gray-800 rounded-full text-sm font-mono dark:text-white">{skill}</span>
      <style jsx global>{`
        @media print {>
          @page { size: A4 portrait; margin: 10mm; }
          html, body, #__next, .cv-root {
            -webkit-print-color-adjust: exact !important;4 className="font-semibold mb-3">Metodologías</h4>
            print-color-adjust: exact !important; className="flex flex-wrap gap-2">
            background: #fff !important;, 'Git Flow'].map(skill => (
          }1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-mono dark:text-white">{skill}</span>
          /* Neutralizar posibles fondos oscuros heredados */
          .dark & { background: #fff !important; }
          .dark .cv-root { background: #fff !important; }
          .dark .cv-root * { background-color: transparent !important; }
          body, .cv-root { font-size: 11px !important; line-height: 1.25; }
          .cv-root .p-8 { padding: 18px !important; }mas (compacto) */}
          section.p-8 { padding: 14px 18px !important; }lassName="px-8 pb-4 pt-0 print:pt-0">
          .cv-root h1 { font-size: 22pt !important; margin-bottom: 4px !important; }iv className="flex flex-wrap items-center gap-2 text-sm">
          .cv-root h2 { font-size: 12pt !important; margin-bottom: 6px !important; }"text-base font-mono font-semibold m-0 dark:text-white border-none p-0">Idiomas:</h3>
            .cv-root h3 { font-size: 11pt !important; margin-bottom: 6px !important; }sName="dark:text-white">Español (Nativo)</span>
          .cv-root h4 { font-size: 10pt !important; margin-bottom: 2px !important; }
          .cv-root p, .cv-root li, .cv-root span { font-size: 10pt !important; }ite">Inglés (Básico)</span>
          .cv-root ul { margin: 2px 0 6px 0 !important; }
          .cv-root .mb-6 { margin-bottom: 10px !important; }
          .cv-root .mt-2 { margin-top: 4px !important; }
          .cv-root .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 10px !important; }e jsx global>{`
          /* Badges más compactas */
          .cv-root span.rounded-full { padding: 2px 6px !important; font-size: 9pt !important; } }
          /* Ocultar controles no necesarios */
          .print\\:hidden, .cv-root button, .cv-root [role="button"] { display: none !important; }
          /* Forzar texto negro */
          h1, h2, h3, h4, h5, h6, p, span, li, td, th, a { color: #000 !important; -webkit-text-fill-color: #000 !important; }
          * { box-shadow: none !important; text-shadow: none !important; }
        }
      `}</style>
    </div>
  )
}
          * { box-shadow: none !important; text-shadow: none !important; }
        }
      `}</style>
    </div>
  )
}
