"use client"

import { Download, Mail, Phone, Github, Globe, Linkedin, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Curriculum() {
  const router = useRouter()
  const { setTheme } = useTheme()

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

  return (
    <div className="min-h-screen bg-white dark:bg-black p-8 cv-root relative">
      {/* Controles flotantes (ocultos en impresión) */}
      <div className="fixed top-4 right-4 flex items-center gap-2 z-50 print:hidden">
        <Button onClick={() => router.back()} variant="outline" size="icon" className="h-8 w-8 rounded-full shadow-md bg-white dark:bg-black" title="Volver">
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <Button onClick={handlePrint} variant="secondary" size="icon" className="h-8 w-8 rounded-full shadow-md" title="Descargar PDF">
          <Download className="w-4 h-4" />
        </Button>
      </div>

      <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-none rounded-none overflow-visible pt-4">
        {/* Header */}
        <div className="bg-white dark:bg-black text-black dark:text-white p-8 pb-4 print:p-3 print:pb-2">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center print:gap-5 print:flex-row print:items-start">
            {/* Foto de perfil */}
            <div className="flex-shrink-0 print:block print:mt-0">
              <img 
                src="/profile-cv.jpg" 
                alt="Mario Gabriel Avendaño" 
                className="w-36 sm:w-40 md:w-44 print:w-24 print:border-2 h-auto rounded-xl object-contain border-4 border-muted shadow-sm"
              />
            </div>
            
            {/* Información personal */}
            <div className="flex flex-col gap-2 text-center md:text-left w-full">
              <div>
                <h1 className="text-3xl font-mono font-bold mb-1 dark:text-white print:mb-0.5 print:text-2xl">Mario Gabriel Avendaño</h1>
                <p className="text-sm font-light opacity-80 dark:text-white print:text-[10px] print:opacity-100 print:mb-1">Desarrollador Frontend Junior | React · Next.js · TypeScript · Node.js · PostgreSQL</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs print:mt-1.5 print:gap-x-4 print:gap-y-0.5 text-left">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary print:text-black flex-shrink-0" />
                    <a href="mailto:mariogabrielydlp@gmail.com" className="hover:underline">mariogabrielydlp@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary print:text-black flex-shrink-0" />
                    <a href="tel:+543516503188" className="hover:underline">+54 351 650 3188</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-primary print:text-black flex-shrink-0" />
                    <a href="https://github.com/mgaDesarrollo" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/mgaDesarrollo</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-primary print:text-black flex-shrink-0" />
                    <a href="https://linkedin.com/in/mario-gabriel-avendaño-4334aa025/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/mario-gabriel-avendaño-4334aa025/</a>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <Globe className="h-4 w-4 text-primary print:text-black flex-shrink-0" />
                    <a href="https://portfolio-react-onic-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">portfolio-react-onic-rho.vercel.app/</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Perfil Profesional */}
        <section className="p-8 py-4">
          <h3 className="text-lg font-mono font-bold mb-2 border-b pb-1 dark:text-white">Perfil Profesional</h3>
          <div className="space-y-2 text-sm leading-relaxed dark:text-white print:text-xs">
            <p>
              Desarrollador Frontend Junior especializado en React y Next.js, con experiencia práctica en el desarrollo de aplicaciones web y proyectos freelance. Trabajo con JavaScript, TypeScript, React, Next.js, Node.js y PostgreSQL, desarrollando interfaces responsive, integrando APIs y conectando aplicaciones con bases de datos.
            </p>
            <p>
              Actualmente participo en el desarrollo de una aplicación web de gobernanza digital, trabajando con Next.js, React, PostgreSQL, Prisma y Git.
            </p>
            <p>
              Cuento además con experiencia previa en soporte técnico y atención a usuarios, lo que me permite combinar conocimientos técnicos con capacidad de resolución de problemas, comunicación y trabajo en equipo.
            </p>
            <p>
              Busco incorporarme a un equipo de desarrollo donde pueda aportar experiencia práctica, continuar creciendo profesionalmente y asumir nuevos desafíos técnicos.
            </p>
          </div>
        </section>

        {/* Experiencia Laboral */}
        <section className="p-8 py-4">
          <h3 className="text-lg font-mono font-bold mb-3 border-b pb-1 dark:text-white">Experiencia Laboral</h3>
          
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-sm font-semibold dark:text-white">Desarrollador de Software | SingularityNET</h4>
              <span className="text-xs font-mono opacity-80">Mayo 2025 – Abril 2026</span>
            </div>
            <ul className="list-disc ml-5 space-y-0.5 text-xs dark:text-white">
              <li>Desarrollo de funcionalidades para una aplicación web de gobernanza digital utilizando React y Next.js.</li>
              <li>Implementación de interfaces interactivas y componentes reutilizables.</li>
              <li>Desarrollo de funcionalidades utilizando JavaScript/TypeScript, React y Next.js.</li>
              <li>Integración de APIs y servicios para la gestión de datos y funcionalidades de la aplicación.</li>
              <li>Trabajo con PostgreSQL y Prisma para persistencia y acceso a datos.</li>
              <li>Implementación y mantenimiento de funcionalidades de autenticación y control de acceso.</li>
              <li>Participación en la integración de soluciones basadas en tecnologías descentralizadas.</li>
              <li>Trabajo colaborativo y control de versiones utilizando Git y GitHub.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-sm font-semibold dark:text-white">Desarrollador Frontend Freelance</h4>
              <span className="text-xs font-mono opacity-80">Enero 2025 – Actualidad</span>
            </div>
            <ul className="list-disc ml-5 space-y-0.5 text-xs dark:text-white">
              <li>Desarrollo de aplicaciones web utilizando React, Next.js, JavaScript y TypeScript.</li>
              <li>Creación de interfaces responsive y componentes reutilizables con Tailwind CSS.</li>
              <li>Integración de APIs y servicios backend.</li>
              <li>Desarrollo de funcionalidades completas desde la implementación hasta el deployment.</li>
              <li>Desarrollo de aplicaciones CRUD y sistemas de gestión orientados a necesidades específicas de clientes.</li>
              <li>Optimización de interfaces, experiencia de usuario y adaptación a dispositivos móviles.</li>
              <li>Gestión de código y versiones mediante Git y GitHub.</li>
              <li>Desarrollo de proyectos disponibles en mi portfolio.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-sm font-semibold dark:text-white">Técnico de Soporte a Usuarios | Flexxus</h4>
              <span className="text-xs font-mono opacity-80">Agosto 2020 – Noviembre 2020</span>
            </div>
            <ul className="list-disc ml-5 space-y-0.5 text-xs dark:text-white">
              <li>Soporte técnico a usuarios del sistema ERP Flexxus.</li>
              <li>Resolución de incidencias de manera remota y telefónica.</li>
              <li>Configuración e instalación de software, puestos de trabajo e impresoras fiscales.</li>
              <li>Mantenimiento y actualización de bases de datos de clientes.</li>
              <li>Análisis y resolución de problemas relacionados con las operaciones del sistema.</li>
              <li>Coordinación de actualizaciones de software minimizando el impacto en las operaciones de los clientes.</li>
            </ul>
          </div>

          <div className="mb-2">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-sm font-semibold dark:text-white">Soporte Técnico a Clientes | Telmex</h4>
              <span className="text-xs font-mono opacity-80">Enero 2011 – Enero 2012</span>
            </div>
            <ul className="list-disc ml-5 space-y-0.5 text-xs dark:text-white">
              <li>Asistencia técnica a clientes de servicios de banda ancha.</li>
              <li>Diagnóstico y resolución de problemas de conectividad y configuración.</li>
              <li>Atención de consultas y resolución de incidencias técnicas.</li>
              <li>Comunicación directa con clientes para identificar problemas y brindar soluciones.</li>
            </ul>
          </div>
        </section>

        {/* Proyectos Destacados */}
        <section className="p-8 py-4">
          <h3 className="text-lg font-mono font-bold mb-3 border-b pb-1 dark:text-white">Proyectos Destacados</h3>
          <div className="space-y-3">
            <div className="border-l-2 pl-3 border-gray-300 dark:border-gray-700">
              <h4 className="text-sm font-semibold dark:text-white">Governance Dashboard</h4>
              <span className="text-xs font-mono opacity-70 block mb-1">Next.js · React · TypeScript · PostgreSQL · Prisma</span>
              <p className="text-xs dark:text-white">Aplicación web orientada a la gobernanza digital, con funcionalidades de autenticación, gestión de propuestas, votaciones, roles y panel administrativo.</p>
            </div>
            <div className="border-l-2 pl-3 border-gray-300 dark:border-gray-700">
              <h4 className="text-sm font-semibold dark:text-white">Media Loca</h4>
              <span className="text-xs font-mono opacity-70 block mb-1">Next.js · React · TypeScript · PostgreSQL · Prisma</span>
              <p className="text-xs dark:text-white">Plataforma E-commerce & Sistema de Gestión. Aplicación web integral para una marca de diseño, incluye catálogo interactivo y un dashboard de administración para gestionar inventario, ventas, categorías y métricas con foco en el rendimiento y escalabilidad.</p>
            </div>
            <div className="border-l-2 pl-3 border-gray-300 dark:border-gray-700">
              <h4 className="text-sm font-semibold dark:text-white">Envios App</h4>
              <span className="text-xs font-mono opacity-70 block mb-1">React · Node.js · PostgreSQL</span>
              <p className="text-xs dark:text-white">Plataforma de gestión logística diseñada para el control y seguimiento de envíos. Permite la administración eficiente de paquetes, rutas y estados de entrega para optimizar el flujo de trabajo.</p>
            </div>
          </div>
        </section>

        {/* Habilidades Técnicas */}
        <section className="p-8 py-4">
          <h3 className="text-lg font-mono font-bold mb-2 border-b pb-1 dark:text-white">Habilidades Técnicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
            <div>
              <span className="text-xs font-semibold mr-2">Frontend:</span>
              <span className="text-xs">React, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap</span>
            </div>
            <div>
              <span className="text-xs font-semibold mr-2">Backend:</span>
              <span className="text-xs">Node.js, Express.js, REST APIs</span>
            </div>
            <div>
              <span className="text-xs font-semibold mr-2">Bases de datos:</span>
              <span className="text-xs">PostgreSQL, Prisma, MySQL, MongoDB, Firebird SQL</span>
            </div>
            <div>
              <span className="text-xs font-semibold mr-2">Herramientas:</span>
              <span className="text-xs">Git, GitHub, VS Code, Vite</span>
            </div>
            <div className="md:col-span-2">
              <span className="text-xs font-semibold mr-2">Conceptos:</span>
              <span className="text-xs">Responsive Design, Componentes reutilizables, CRUD, Integración de APIs, Autenticación, Control de versiones</span>
            </div>
          </div>
        </section>

        {/* Educación + Idiomas — en pantalla normales son secciones separadas,
             en impresión se muestran lado a lado para ahorrar espacio */}
        <div className="print:flex print:flex-row print:gap-6 print:px-5 print:pb-3">
          {/* Educación */}
          <section className="p-8 py-4 print:p-0 print:flex-[2]">
            <h3 className="text-lg font-mono font-bold mb-3 border-b pb-1 dark:text-white print:mb-1">Educación</h3>
            <div className="space-y-3 print:space-y-1">
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h4 className="text-sm font-semibold dark:text-white">Técnico Superior en Programación | UTN</h4>
                  <span className="text-xs font-mono opacity-80">2015</span>
                </div>
                <p className="text-xs">Formación técnica en programación y desarrollo de software.</p>
                <p className="text-xs font-medium">Tesis pendiente.</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h4 className="text-sm font-semibold dark:text-white">Plan 111mil de Programación</h4>
                  <span className="text-xs font-mono opacity-80">2016</span>
                </div>
                <p className="text-xs">Curso anual. Formación en POO, Java y SQL.</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h4 className="text-sm font-semibold dark:text-white">Técnico en Reparación de PC | Academia Santo Domingo</h4>
                  <span className="text-xs font-mono opacity-80">2012 – 2013</span>
                </div>
                <p className="text-xs">Reparación de computadoras y configuración de redes.</p>
              </div>
            </div>
          </section>

          {/* Idiomas */}
          <section className="px-8 pb-8 pt-0 print:p-0 print:flex-[1]">
            <h3 className="text-lg font-mono font-bold mb-2 border-b pb-1 dark:text-white print:mb-1">Idiomas</h3>
            <div className="flex flex-col gap-1 text-xs">
              <div><span className="font-semibold mr-2">Español:</span>Nativo</div>
              <div><span className="font-semibold mr-2">Inglés:</span>Lectura técnica / Básico</div>
            </div>
          </section>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          @page { size: A4; margin: 8mm 10mm; }
          html, body, #__next, .cv-root {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background: #fff !important;
          }
          .dark & { background: #fff !important; }
          .dark .cv-root { background: #fff !important; }
          .dark .cv-root * { background-color: transparent !important; }
          body, .cv-root { font-size: 8pt !important; line-height: 1.25; }
          .cv-root .max-w-4xl { max-width: 100% !important; padding-top: 0 !important; }
          .cv-root section, .cv-root .p-8 { padding: 6px 0 !important; }
          .cv-root .py-4 { padding-top: 4px !important; padding-bottom: 4px !important; }
          .cv-root h1 { font-size: 15pt !important; margin-bottom: 1px !important; }
          .cv-root h3 { font-size: 9.5pt !important; margin-bottom: 2px !important; border-bottom: 1px solid #ccc !important; padding-bottom: 1px !important; }
          .cv-root h4 { font-size: 8.5pt !important; margin-bottom: 0 !important; }
          .cv-root p, .cv-root li, .cv-root span:not(.font-semibold), .cv-root a { font-size: 7.5pt !important; }
          .cv-root ul { margin-top: 1px !important; margin-bottom: 3px !important; padding-left: 14px !important; }
          .cv-root li { margin-bottom: 1px !important; }
          .cv-root .mb-4 { margin-bottom: 5px !important; }
          .cv-root .mb-2 { margin-bottom: 3px !important; }
          .cv-root .space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 4px !important; }
          .cv-root .space-y-1 > :not([hidden]) ~ :not([hidden]) { margin-top: 2px !important; }
          .cv-root .border-l-2 { padding-left: 6px !important; margin-bottom: 4px !important; }
          .cv-root .space-y-3.projects > :not([hidden]) ~ :not([hidden]) { margin-top: 4px !important; }
          .print\:hidden, .cv-root button, .cv-root [role="button"] { display: none !important; }
          h1, h2, h3, h4, h5, h6, p, span, li, td, th, a, div { color: #000 !important; -webkit-text-fill-color: #000 !important; }
          * { box-shadow: none !important; text-shadow: none !important; }
        }
      `}</style>
    </div>
  )
}
