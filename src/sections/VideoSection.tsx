import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../components'
import { Play } from 'lucide-react'

export const VideoSection: React.FC = () => {
  const videoId = 'SJI8-TtgS4E'
  const videoUrl = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&fs=1&autoplay=1`

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="py-24 bg-bg-primary px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div
            className="text-center space-y-4"
            variants={itemVariants}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold">
                Conóceme mejor
              </span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
              Mi Pitch Profesional
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Un vistazo a mi experiencia, skills y enfoque en 2 minutos
            </p>
          </motion.div>

          {/* Video Container */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <Card className="overflow-hidden">
              <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
                {/* Play icon overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="bg-primary p-4 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-8 h-8 text-text-primary fill-current" />
                  </motion.div>
                </motion.div>

                {/* Iframe */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-0"
                  src={videoUrl}
                  title="Samuel Ortiz - Mi Pitch Profesional"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Card>

            {/* Video Description */}
            <motion.div
              className="mt-8 text-center space-y-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-text-secondary max-w-2xl mx-auto">
                En este video comparto mi visión sobre diseño centrado en usuarios, mi experiencia en UX/UI y cómo combino investigación con desarrollo para crear experiencias digitales significativas.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
