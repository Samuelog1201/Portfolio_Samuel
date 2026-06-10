import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components'
import { portfolioData } from '../data/portfolio'
import { Download, Mail, ArrowRight } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export const HeroSection: React.FC = () => {
  const { hero } = portfolioData

  const handleScrollToProjects = () => {
    const element = document.getElementById('proyectos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadCV = () => {
    if (hero.cvUrl && !hero.cvUrl.includes('[AGREGAR_URL_CV]')) {
      window.open(hero.cvUrl, '_blank')
    } else {
      alert('El CV aún no está configurado. Por favor, agrega la URL en data/portfolio.ts')
    }
  }

  const handleScrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-bg-primary via-bg-primary to-bg-secondary flex items-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-lighter rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Greeting */}
            <motion.div variants={item}>
              <p className="text-primary-light text-lg font-semibold">
                {hero.greeting}
              </p>
            </motion.div>

            {/* Name */}
            <motion.div variants={item}>
              <h1 className="text-5xl lg:text-7xl font-bold text-text-primary leading-tight">
                {hero.name}
              </h1>
            </motion.div>

            {/* Roles */}
            <motion.div variants={item} className="space-y-2">
              {hero.roles.map((role, index) => (
                <p key={index} className="text-xl lg:text-2xl text-text-secondary font-medium">
                  {role}
                </p>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div variants={item}>
              <p className="text-lg text-text-secondary leading-relaxed max-w-md">
                {hero.description}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={handleScrollToProjects}
              >
                <ArrowRight className="w-5 h-5 mr-2 inline" />
                {hero.cta.projects}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadCV}
              >
                <Download className="w-5 h-5 mr-2 inline" />
                {hero.cta.cv}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleScrollToContact}
              >
                <Mail className="w-5 h-5 mr-2 inline" />
                {hero.cta.contact}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="relative h-96 lg:h-full min-h-96"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-2xl border border-primary/30 shadow-glow-blue-lg" />

               {/* Image container */}
               <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary-lighter/10 border border-primary/20">
                 <img
                   src="/profile.jpg"
                   alt="Samuel Ortiz - Product Designer"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-bg-tertiary via-transparent to-transparent" />
               </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-32 h-32 border border-primary/20 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary-light/20 rounded-full pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
