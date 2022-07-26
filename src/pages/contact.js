import React from 'react';
import HeaderBar from '../components/header';
import { motion } from "framer-motion"


const content = {
  animate: {
      transition: { staggerChildren: 0.1 }
  },
};

const header = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function Contact() {
  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div variants = {content} animate="animate" initial="initial">
        <motion.div variants = {header}>
          <HeaderBar />
        </motion.div>
        <motion.div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '80px' }} variants={title}>
          <h2 style={{ fontSize: '50px', fontWeight: '10' }}>Contact Me</h2>
          <text style={{ fontWeight: '50' }}>(under construction)</text>
          </motion.div>
      </motion.div>
    </motion.section>
  );
}
