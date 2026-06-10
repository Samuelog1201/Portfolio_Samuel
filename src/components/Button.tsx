import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  href?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  href
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'

  const variants = {
    primary: 'bg-primary hover:bg-primary-light text-text-primary shadow-glow-blue hover:shadow-glow-blue-lg',
    secondary: 'bg-bg-tertiary hover:bg-bg-secondary text-text-primary border border-border-color',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-text-primary'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}
