import React from 'react'
import { motion } from 'framer-motion'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-border-color py-8">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-text-secondary text-sm">
              © {currentYear} Samuel Ortiz. Diseñado y desarrollado con React + Tailwind CSS.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <motion.a
              href="#"
              className="hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              Behance
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
