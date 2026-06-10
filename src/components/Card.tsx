import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'glass'
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  variant = 'default'
}) => {
  const baseStyles = 'rounded-xl border border-border-color overflow-hidden transition-all duration-300'
  
  const variants = {
    default: 'bg-bg-tertiary',
    glass: 'glass'
  }

  const cardClass = `${baseStyles} ${variants[variant]} ${className}`

  return (
    <motion.div
      className={cardClass}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
