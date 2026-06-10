import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre', label: 'Sobre mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'contacto', label: 'Contacto' }
]

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => handleNavClick('inicio')}
            className="text-2xl font-bold gradient-text"
          >
            SO
          </button>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? 'text-primary bg-primary/10'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden w-10 h-10 rounded-lg bg-bg-tertiary flex items-center justify-center">
          <span className="w-5 h-0.5 bg-primary block" />
        </motion.button>
      </div>
    </motion.nav>
  )
}
