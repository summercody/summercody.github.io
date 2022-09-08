import React from 'react';
import HeaderBar from '../components/header';
import { motion } from "framer-motion";
import ghIcon from '../images/GitHub-Mark-120px-plus.png';
import liIcon from '../images/LI-In-Bug.png';
import { ReactComponent as GmailLogo } from '../images/Gmail_icon_(2020).svg';

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

const form = {
  initial: { y: -20, opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const icons = {
  initial: { y: -10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const handleSubmit = (event) => {
  console.log("submitted")
}

export default function Contact() {


  return (
    <motion.section exit={{ opacity: 0 }} style={{ overflowX: 'hidden', height: '100vh' }}>
      <motion.div variants={content} animate="animate" initial="initial">
        <motion.div variants={header}>
          <HeaderBar />
        </motion.div>
        <motion.div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', 
          justifyContent: 'center', marginTop: '100px' }} variants={title}>
          {/* <h2 style={{ fontSize: '50px', fontWeight: '10' }}>Contact Me</h2> */}
          {/* <text style={{ fontWeight: '50' }}>(under construction)</text> */}
          <motion.div variants={icons} style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', marginTop: '150px', position: 'relative'}}>
            <div style={{ width: '500px', height: '300px', border: '7px dotted #f5d4ad', borderRadius: '17px', position: "absolute", 
              zIndex: -2}}>
            </div>
            <div style={{ width: '380px', height: '500px', backgroundColor: 'white', position: "absolute", 
              zIndex: -1}}>
            </div>
            <text style={{ fontWeight: '100', width: '400px', textAlign: 'center', fontSize: '18px' }}>
              I'd love to hear from you! Feel free to contact me
              using the methods below.
            </text>
            <div style={{ display: 'flex', gap: '20px', width: '100vw', justifyContent: 'center', alignItems: 'center', height: '100px',
              padding: '0px 30px'}}>
              <a href="https://www.linkedin.com/in/summercody/" target="_blank" rel="noopener noreferrer">
                <button>
                  <img src={liIcon} alt="github Icon" style={{ width: 'auto', height: '50px' }} />
                </button>
              </a>
              <button onClick={() => window.location = 'mailto:scody.contactme@gmail.com'}>
                <GmailLogo style={{ width: 'auto', height: '50px' }} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
