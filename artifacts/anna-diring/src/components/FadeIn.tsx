import React from 'react';
import { motion, useReducedMotion, type Easing } from 'framer-motion';

const EASE: Easing = [0.21, 0.47, 0.32, 0.98];

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  duration?: number;
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '', duration = 0.8 }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
          x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: shouldReduceMotion
        ? { duration: 0.3, delay: 0 }
        : { duration, delay, ease: EASE },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
