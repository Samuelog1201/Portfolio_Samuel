import React from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  title,
  subtitle
}) => {
  return (
    <motion.section
      id={id}
      className={`py-24 lg:py-40 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            className="mb-16 lg:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title && (
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-text-secondary max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </motion.section>
  )
}
