import React from 'react'
import { motion } from 'framer-motion'
import { Section } from '../components'
import { portfolioData } from '../data/portfolio'
import * as Icons from 'lucide-react'

type IconName = keyof typeof Icons

const getIcon = (iconName: string) => {
  const Icon = Icons[iconName as IconName]
  return Icon ? <Icon className="w-6 h-6" /> : <Icons.Circle className="w-6 h-6" />
}

export const ProcessSection: React.FC = () => {
  const { designProcess } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <Section id="proceso" title="Mi Proceso de Diseño">
      {/* Desktop Layout - Timeline */}
      <motion.div
        className="hidden lg:block space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {designProcess.map((process, index) => (
          <motion.div
            key={index}
            className="relative"
            variants={itemVariants}
          >
            {/* Connector line */}
            {index < designProcess.length - 1 && (
              <div className="absolute left-12 top-24 w-0.5 h-20 bg-gradient-to-b from-primary to-primary/20" />
            )}

            <div className="flex gap-8 items-start">
              {/* Number Circle */}
              <motion.div
                className="relative z-10 flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center border-2 border-primary-lighter shadow-glow-blue">
                  <span className="text-2xl font-bold text-white">
                    {process.step}
                  </span>
                </div>
              </motion.div>

              {/* Content */}
              <div className="pt-4 pb-8 flex-grow">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div className="text-primary mt-2">
                    {getIcon(process.icon)}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {process.title}
                    </h3>
                    <p className="text-lg text-text-secondary max-w-xl">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Layout - Grid */}
      <motion.div
        className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {designProcess.map((process, index) => (
          <motion.div
            key={index}
            className="bg-bg-tertiary rounded-xl p-6 border border-border-color"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0 text-white font-bold"
              >
                {process.step}
              </motion.div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {process.title}
                </h3>
              </div>
            </div>
            <p className="text-text-secondary text-sm">
              {process.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
