import HeaderBar from "../components/header";
import { motion } from "framer-motion"

export default function About() {


  return (
    <motion.div exit={{ opacity: 0 }}>
      <HeaderBar />
      <h2 style={{ marginTop: '30px', marginLeft: '25px' }}>About Me</h2>
    </motion.div>
        
  );
}
