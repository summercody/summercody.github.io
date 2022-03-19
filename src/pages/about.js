import HeaderBar from "../components/header";
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


export default function About() {

  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div variants={content} animate="animate" initial="initial">
        <motion.section variants={header}>
          <HeaderBar />
        </motion.section>
        <motion.section variants={title}>
          <h2 style={{ marginTop: '30px', marginLeft: '25px' }}>About Me</h2>
        </motion.section>
      </motion.div>
    </motion.section>
        
  );
}
