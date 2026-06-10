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
        className="space-y-12 lg:space-y-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Main Projects */}
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.id}
            className="group"
            variants={itemVariants}
          >
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <motion.button
                  onClick={() => setSelectedImage({ src: project.image, alt: project.title })}
                  className="relative h-64 md:h-80 lg:h-full overflow-hidden bg-gradient-to-br from-bg-secondary to-bg-tertiary flex items-center justify-center cursor-pointer hover:cursor-pointer focus:outline-none"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-tertiary/80 via-transparent to-transparent pointer-events-none" />
                </motion.button>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Category */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-3xl lg:text-4xl font-bold text-text-primary"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-lg text-text-secondary leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Roles */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      {project.roles.map((role, roleIndex) => (
                        <span
                          key={roleIndex}
                          className="px-3 py-1 rounded-full text-sm text-text-secondary border border-border-color"
                        >
                          {role}
                        </span>
                      ))}
                    </motion.div>

                    {/* Tools */}
                    <motion.div
                      className="flex flex-wrap gap-2 pt-4 border-t border-border-color"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 rounded-full text-sm text-primary-light bg-primary/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    className="pt-8 mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    {project.projectUrl && project.projectUrl !== '[AGREGAR_URL_TUPLATA]' && project.projectUrl !== '[AGREGAR_URL_UBER_DESIGN_SYSTEM]' && project.projectUrl !== '[AGREGAR_URL_PLANEA]' ? (
                      <motion.a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary-light text-text-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ver caso de estudio
                        <ArrowUpRight className="w-5 h-5 ml-2" />
                      </motion.a>
                    ) : (
                      <motion.button
                        disabled
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-bg-tertiary text-text-secondary rounded-lg opacity-50 cursor-not-allowed"
                        whileHover={{ scale: 1 }}
                      >
                        Próximamente
                        <ArrowUpRight className="w-5 h-5 ml-2" />
                      </motion.button>
                    )}
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {/* Coming Soon Card */}
        <motion.div variants={itemVariants}>
          <Card className="p-12 lg:p-16 min-h-80 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary-lighter/5 border border-primary/20">
            <motion.div
              className="text-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Nuevo caso de estudio
              </h3>
              <p className="text-lg text-text-secondary">
                Próximamente
              </p>
            </motion.div>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  )
}
