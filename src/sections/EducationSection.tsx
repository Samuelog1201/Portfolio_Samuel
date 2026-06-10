import React from 'react'
import { motion } from 'framer-motion'
import { Section, Card } from '../components'
import { portfolioData } from '../data/portfolio'
import { BookOpen, CheckCircle } from 'lucide-react'

export const EducationSection: React.FC = () => {
  const { education } = portfolioData

  return (
    <Section id="educacion" title="Educación">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-grow">
                  <motion.div
                    className="mt-1 text-primary"
                    whileHover={{ rotate: 10 }}
                  >
                    <BookOpen className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-light font-semibold mb-4">
                      {edu.institution}
                    </p>
                    {edu.current && (
                      <div className="flex items-center gap-2 text-primary text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>Graduación estimada: {edu.graduation}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
