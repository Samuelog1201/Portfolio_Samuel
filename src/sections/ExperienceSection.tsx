import React from 'react'
import { motion } from 'framer-motion'
import { Section } from '../components'
import { portfolioData } from '../data/portfolio'
import { Briefcase, Calendar } from 'lucide-react'

export const ExperienceSection: React.FC = () => {
  const { experience } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <Section id="experiencia" title="Experiencia">
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-primary/20" />

          {/* Experience items */}
          <div className="space-y-12 pl-20">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-[46px] top-2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light border-4 border-bg-primary flex items-center justify-center shadow-glow-blue"
                  whileHover={{ scale: 1.2 }}
                >
                  <Briefcase className="w-5 h-5 text-white" />
                </motion.div>

                {/* Content */}
                <div className="bg-bg-tertiary rounded-xl p-8 border border-border-color hover:border-primary/30 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-primary-light font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary mt-4 md:mt-0">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">{exp.year}</span>
                    </div>
                  </div>
                  <p className="text-text-secondary">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
