import React from 'react'
import { motion } from 'framer-motion'
import { Section, Card } from '../components'
import { portfolioData } from '../data/portfolio'
import * as Icons from 'lucide-react'

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

type IconName = keyof typeof Icons

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData

  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as IconName]
    return Icon ? <Icon className="w-8 h-8" /> : <Icons.Code className="w-8 h-8" />
  }

  return (
    <Section id="habilidades" title="Habilidades">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skillGroup, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary">
                  {getIcon(skillGroup.icon)}
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  {skillGroup.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
