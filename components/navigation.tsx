"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => { if (data.authenticated) setAuthenticated(true) })
      .catch(() => setAuthenticated(false))
  }, [])

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' })
    setAuthenticated(false)
  }

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="font-mono font-bold text-xl">MGA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            {authenticated ? (
              <Button variant="outline" size="sm" onClick={handleLogout} className="bg-transparent">
                Logout
              </Button>
            ) : (
              <Button variant="outline" size="sm" asChild className="bg-transparent">
                <Link href="/login">Login</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="h-9 w-9">
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 px-3 pt-2">
                {authenticated ? (
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" onClick={() => { handleLogout(); setIsOpen(false) }}>
                    Logout
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent" onClick={() => setIsOpen(false)}>
                    <Link href="/login">Login</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
