import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <div className="flex justify-center my-8">
          <a href="/curriculum" className="bg-primary text-primary-foreground px-6 py-2 rounded shadow hover:bg-primary/80 transition font-bold">
            Ver Curriculum
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
