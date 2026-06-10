import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Button, Card } from '../components'
import { portfolioData } from '../data/portfolio'
import { Mail, Send } from 'lucide-react'
import * as Icons from 'lucide-react'

type IconName = keyof typeof Icons

const getIcon = (iconName: string) => {
  const Icon = Icons[iconName as IconName]
  return Icon ? <Icon className="w-6 h-6" /> : <Icons.ExternalLink className="w-6 h-6" />
}

export const ContactSection: React.FC = () => {
  const { contact } = portfolioData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for form submission
    console.log('Form submitted:', formData)
  }

  return (
    <Section id="contacto" className="bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {contact.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {contact.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Email */}
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary"
                  whileHover={{ scale: 1.1 }}
                >
                  <Mail className="w-6 h-6" />
                </motion.div>
                <div>
                  <p className="text-sm text-text-secondary mb-1">Email</p>
                  <motion.a
                    href={`mailto:${contact.email}`}
                    className="text-lg font-semibold text-text-primary hover:text-primary transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {contact.email}
                  </motion.a>
                </div>
              </Card>
            </motion.div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                También me encuentras en:
              </h3>
              {contact.links.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary"
                      whileHover={{ scale: 1.1 }}
                    >
                      {getIcon(link.icon)}
                    </motion.div>
                    <motion.a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-text-primary hover:text-primary transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                    </motion.a>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Tu nombre"
                    required
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="tu.email@example.com"
                    required
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Mensaje
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none h-32"
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2 inline" />
                    Enviar mensaje
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
