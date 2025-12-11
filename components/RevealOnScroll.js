"use client";
import { motion } from 'framer-motion';

export default function RevealOnScroll({ children, direction = 'up', delay = 0 }) {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 50 : 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { duration: 0.6, delay: delay, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}