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

const handleSubmit = (event) => {
  console.log("submitted")
}

export default function Contact() {
  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div variants={content} animate="animate" initial="initial">
        <motion.div variants={header}>
          <HeaderBar />
        </motion.div>
        <motion.div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }} variants={title}>
          <h2 style={{ fontSize: '50px', fontWeight: '10' }}>Contact Me</h2>
          <text style={{ fontWeight: '50' }}>(under construction)</text>
          {/* <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px', width: '100vw', padding: '0px 250px' }}>
            <label style={{backgroundColor: '#fce8e3', padding: '10px 20px', borderRadius: '8px' }}>
              <input placeholder='Name' type="email" name="name" style={{  outline: 'none', marginLeft: '8px', width: '740px', backgroundColor: '#fce8e3', height: '40px'}}/>
            </label>
            <label style={{ backgroundColor: '#fce8e3', padding: '10px 20px', borderRadius: '8px' }}>
              <input placeholder='Email' type="email" name="name" style={{ outline: 'none', marginLeft: '8px', width: '740px', backgroundColor: '#fce8e3', height: '40px'}}/>
            </label >
            <label style={{ backgroundColor: '#fce8e3', padding: '10px 20px', borderRadius: '8px' }}>
              <textarea placeholder='Type your message here' type="email" name="name" style={{ resize:'none', outline: 'none', marginLeft: '5px', height: '90px', width: '740px', border: 0, backgroundColor: '#fce8e3'}}/>
            </label>
            <button type="submit" value="Submit" style={{ marginTop: '10px' }}>Submit</button>
          </form> */}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
