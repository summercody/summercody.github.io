import React from 'react';
import HeaderBar from '../components/header';
import { motion } from "framer-motion"


export default function Contact() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <HeaderBar />
      <h2 style={{ marginTop: '30px', marginLeft: '25px' }}>Contact Me</h2>
    </motion.div>
  );
}
