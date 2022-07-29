import HeaderBar from "../components/header";
import { motion } from "framer-motion"
import profile2 from "../images/profile_2.jpg";

const picLink = "https://www.google.com/search?q=selfoss+iceland&client=firefox-b-1-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-zsbirZ35AhW0hIkEHQ2lBusQ_AUoAnoECAIQBA&biw=1292&bih=732&dpr=2"

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

const prof = {
  initial: { y: -40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const textRight = {
  initial: { y: -40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function About() {

  return (
    <motion.section exit={{ opacity: 0 }} >
      <motion.div variants={content} animate="animate" initial="initial" style={{ height: '100vh' }}>
        <motion.section variants={header}>
          <HeaderBar />
        </motion.section>
        <motion.section style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', marginTop: '40px'
        }} variants={title}>
          <h2 style={{ fontSize: '50px', fontWeight: '10', marginBottom: '30px' }}>About Me</h2>
          <div className="contentContainer" style={{
            display: 'flex', gap: '30px', width: '820px', paddingBottom: '80px'
          }}>
            <motion.div variants={prof} style={{ minWidth: '320px'}}>
              <img src={profile2} style={{
                width: '320px',
              }} />
            </motion.div>
            <motion.div variants={textRight} style={{ minWidth: '320px'}}>
            <div className="aboutContent" style={{ lineHeight: '26px' }}>
              <p>I'm a self-taught software developer with experience across the stack. Having graduated from Dartmouth College with a degree in Music Composition,
                I am interested in both the technical nature of programming and the ways in which it demands creativity and innovation. I believe that
                both music and programming are more similar than they are different &#8212; there aren't many degrees of separation between thoughtfully constructing a melodic
                line and brainstorming the layout of a new function. Both require a balance of technical knowledge and creative ideation, which I
                seek to bring to all of the work I do.</p>
              <br />
              <p>After graduating and learning on my own, I was given the incredible opportunity to work at a healthcare technology startup, where I've been able to simultaneously
                grow my skills and work to improve how we receive and pay for care.
              </p>
              <br />
              <p>(I also love to travel! See this wonderful Icelandic horse mistaking my jacket for lunch.)</p>
              <div style={{ height: '2px', backgroundColor: '#7e913a', width: '80px', margin: '18px 0px' }}></div>
              <p><strong>Languages</strong>: Python &#8226; JS &#8226; CSS</p>
              <p><strong>Libraries</strong>: React.js &#8226; Pandas &#8226; SQLAlchemy &#8226; Flask API</p>
              <p><strong>Databases & Security</strong>: PostreSQL &#8226; AWS</p>
              {/* <a href={picLink} target="_blank" rel="noopener noreferrer" style={{ 
                alignSelf: 'flex-end',fontSize: '12.5px'}}>Where did I take this picture? 🤔</a> */}
                

            </div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </motion.section>

  );
}
