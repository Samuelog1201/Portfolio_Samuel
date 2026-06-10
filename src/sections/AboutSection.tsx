import React from 'react'
import { motion } from 'framer-motion'
import { Section, Card } from '../components'
import { portfolioData } from '../data/portfolio'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const AboutSection: React.FC = () => {
  const { about } = portfolioData

  return (
    <Section id="sobre" title={about.title}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Main content */}
        <motion.div
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-text-secondary leading-relaxed">
            {about.description}
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            {about.details}
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          className="lg:col-span-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            {about.metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Card variant="glass" className="p-6 text-center">
                  <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {metric.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
