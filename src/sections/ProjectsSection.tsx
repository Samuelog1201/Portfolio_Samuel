import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Card, Button, Modal } from '../components'
import { portfolioData } from '../data/portfolio'
import { ArrowUpRight } from 'lucide-react'

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <Section id="proyectos" title="Proyectos" subtitle="Una selección de mis trabajos académicos y profesionales">
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
      <motion.div
        className="space-y-16 lg:space-y-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Projects */}
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group"
            variants={itemVariants}
          >
            <Card className="overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <motion.button
                  onClick={() => setSelectedImage({ src: project.image, alt: project.title })}
                  className="relative h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-bg-secondary to-bg-tertiary flex items-center justify-center cursor-pointer hover:cursor-pointer focus:outline-none"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-tertiary/80 via-transparent to-transparent pointer-events-none" />
                </motion.button>

                {/* Content */}
                <div className="p-8 lg:p-14 flex flex-col justify-between bg-bg-tertiary">
                  <div className="space-y-8">
                    {/* Category */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-base lg:text-lg text-text-secondary leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Roles */}
                    <motion.div
                      className="flex flex-wrap gap-2 pt-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      {project.roles.map((role, roleIndex) => (
                        <span
                          key={roleIndex}
                          className="px-3 py-1.5 rounded-full text-xs lg:text-sm text-text-secondary border border-border-color bg-bg-primary/50 hover:bg-primary/10 transition-colors duration-200"
                        >
                          {role}
                        </span>
                      ))}
                    </motion.div>

                    {/* Tools */}
                    <motion.div
                      className="flex flex-wrap gap-2 pt-6 border-t border-border-color"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-4 py-2 rounded-full text-sm text-primary-light bg-primary/15 font-medium hover:bg-primary/25 transition-colors duration-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    className="pt-10 mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    {project.projectUrl ? (
                      <motion.a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold bg-primary hover:bg-primary-light text-text-primary shadow-lg shadow-primary/25 hover:shadow-primary/40 rounded-lg transition-all duration-300 group/btn"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ver Proyecto
                        <ArrowUpRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      </motion.a>
                    ) : null}
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
