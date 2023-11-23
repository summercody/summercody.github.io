import HeaderBar from "../components/header";
import { motion } from "framer-motion"
import profile2 from "../images/profile_2.jpg";


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
          <h2 style={{
            fontSize: '50px',
            fontWeight: '10',
            marginBottom: '30px'
          }}>
            About Me
          </h2>
          <div
            className="contentContainer"
            style={{
              display: 'flex',
              gap: '30px',
              width: '800px',
              paddingBottom: '80px'
            }}>
              <motion.div variants={prof} style={{ minWidth: '320px'}}>
                <img src={profile2} style={{
                  width: '320px',
                }} />
              </motion.div>
              <motion.div variants={textRight} style={{ minWidth: '320px'}}>
              <div className="aboutContent" style={{ lineHeight: '27px' }}>
                <p style={{ fontSize: '15px'}}>
                  I'm a self-taught software developer with experience across the stack. Having graduated from Dartmouth College with a degree in Music Composition,
                  I am interested in both the technical nature of programming and the ways in which it demands creativity and innovation.
                </p>
                <br />
                <p style={{ fontSize: '15px'}}>
                  After graduating and spending time learning on my own, I worked for over a year at a small healthcare technology startup, where I honed my skills
                  in frontend web development, building and maintaining API's, database management, and more.
                </p>
                <br />
                <p style={{ fontSize: '15px'}}>
                  Today, I work as a backend engineer at an international ed-tech company, helping to improve the experience of teachers and students who interact
                  with our educational web platform.
                </p>
                <br />
                <p style={{ fontSize: '15px'}}>
                  (I also love to travel! See this wonderful Icelandic horse mistaking my jacket for lunch.)
                </p>

                <div style={{ height: '2px', backgroundColor: '#7e913a', width: '81px', margin: '18px 0px' }}></div>

                <p style={{ fontSize: '15px' }}>
                  <strong>Languages</strong>: Python &#8226; JavaScript &#8226; CSS &#8226; SQL
                </p>
                <p style={{ fontSize: '15px', whiteSpace: 'nowrap' }}>
                  <strong>Libraries & Frameworks</strong>: Pytest &#8226; React &#8226; Pandas &#8226; SQLAlchemy &#8226; Flask
                </p>
                <p style={{ fontSize: '15px' }}>
                  <strong>Databases & Security</strong>: PostreSQL &#8226; AWS
                </p>
                <p style={{ fontSize: '15px' }}>
                  <strong>Miscellaneous</strong>: Elasticsearch &#8226; Docker &#8226; Jenkins &#8226; Git &#8226; GitHub
                </p>
            </div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </motion.section>

  );
}
