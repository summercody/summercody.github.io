import HeaderBar from '../components/header'
import { motion } from "framer-motion"
import { useState } from 'react';
import image from "../images/background_img.jpg"
import profile from "../images/profile.jpeg";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';


require('react-dom');


// Transition containers
const blackBox = {

  initial: {
    height: "100vh",
    bottom: 0
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1]
    }
  }
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 90,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.5 : 0 }
  },
});

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

const background = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};


const InitialTransition = () => {
  return (
    <div className="absolute inset-0 flex items-end justify-center" style={{ overflow: 'hidden' }}>
      <motion.div
        className="relative z-50 flex w-full bg-black items-center justify-center"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        <motion.svg variants={textContainer} className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect variants={text} className="w-full h-full text-gray-600 fill-current" />
          </pattern>
          <text
            className="text-4xl font-bold"
            text-anchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            summercody.io
          </text>
        </motion.svg>
      </motion.div>


    </div>
  )
}


// other variables
const buttonLinks = [
  { name: "GitHub", link: "https://github.com/summercody" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/summercody/" },
  { name: "About Me", link: null }
] // "Resume", 

let emailAddress = 'scody.contactme@gmail.com'
let mailtoAddress = 'mailto:' + emailAddress 

let findPhotoUrl = 'https://www.google.com/search?q=coredo+muromachi&tbm=isch&ved=2ahUKEwil_bfEkJb5AhUkomoFHZN7BbYQ2-cCegQIABAA&oq=' + 
  'coredo+mu&gs_lcp=CgNpbWcQARgAMgUIABCABDIFCAAQgAQyBAgAEBgyBAgAEBgyBAgAEBg6BAgAEEM6CAgAELEDEIMBOggIABCABBCxAzoLCAAQgAQQsQMQgwE6Bwg' +
  'AEIAEEAo6BggAEB4QBToECAAQHjoGCAAQHhAIUM0FWLIRYOMbaABwAHgAgAFjiAG7BpIBAjEwmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=z6TfYuXZ' + 
  'GaTEqtsPk_eVsAs&bih=714&biw=1235&client=firefox-b-1-d'

export default function Home({ isFirstMount }) {

  const [copied, setCopied] = useState(false)

  return (
    <motion.section exit={{ opacity: 0 }} style={{ height: '100vh' }}>
      {isFirstMount && <InitialTransition />}
      <motion.div
        initial="initial"
        animate="animate"
        variants={content(isFirstMount)}
        style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}
      >
        <motion.div variants={background} style={{
          position: "absolute", zIndex: -1, backgroundImage: `url(${image})`,
          height: '100vh', width: '100vw', overflow: 'hidden', backgroundSize: '100vw auto', opacity: '85%'
        }}></motion.div>
        <motion.section variants={header}>
          <HeaderBar />
        </motion.section>
        <motion.div variants={title} style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ 
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12)' + 
                '0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              padding: '45px',
              gap: '20px',
              backgroundColor: 'rgba(255,255,255,0.9)',
              marginTop: '40px',
              height: '480px',
              width: '800px'
          }}>
            <motion.div variants={prof}>
              <img src={profile} style={{
                borderRadius: '4px',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
                minWidth: '270px',
                height: '410px'
              }}/>
            </motion.div>
            <div style={{ display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'right', justifyContent: 'center' }}>
                <text style={{ fontSize: '50px', fontWeight: '10' }}>Welcome!</text>
                <text style={{ fontSize: '15px', fontWeight: '150' }}>
                  I'm Summer, a full-stack software developer with a passion for learning. Here are some ways you can get to know me:
                </text>
                <ul style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end', marginTop: '8px'}}>
                  <li style={{ fontSize: '13px', fontWeight: '400' }}>Proficiencies: </li>
                  <li style={{ fontSize: '13px', fontWeight: '100' }}>Python |</li>
                  <li style={{ fontSize: '13px', fontWeight: '100' }}>JavaScript |</li>
                  <li style={{ fontSize: '13px', fontWeight: '100' }}>React.js |</li>
                  <li style={{ fontSize: '13px', fontWeight: '100' }}>SQL |</li>
                  <li style={{ fontSize: '13px', fontWeight: '100' }}>AWS</li>
                  {/* <li style={{ fontSize: '15px', fontWeight: '100'  }}>Pandas</li> */}
                </ul>
                <div className="buttonHolder" style={{ marginTop: '14px', display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                  {buttonLinks.map((buttonLink) => {
                    if (buttonLink.name == "Email") {
                      return (
                        <button onClick={() => window.location = mailtoAddress} style={{
                          backgroundColor: 'transparent', border: '1px solid grey', padding: '10px', borderRadius: '20px',
                          fontSize: '12px'
                        }}>
                          {buttonLink.name}
                        </button>
                      )
                    } else if (buttonLink.name == "About Me") {
                      return (
                        <Link sx={{
                          textDecoration: 'none',
                          color: 'black',
                          backgroundColor: 'transparent',
                          border: '1px solid grey',
                          padding: '10px', borderRadius: '20px', fontSize: '12px'
                        }} component={RouterLink} to="/about">{buttonLink.name}</Link>
                      )
                    } else {
                      return (
                        <a href={buttonLink.link} target="_blank" rel="noopener noreferrer">
                          <button style={{
                            backgroundColor: 'transparent',
                            border: '1px solid grey',
                            padding: '10px',
                            borderRadius: '20px', 
                            fontSize: '12px'
                          }}>
                            {buttonLink.name}
                          </button>
                        </a>
                      )
                    }
                  })}
                </div>
              </div>
              <div style={{
                  display: 'flex',
                  gap: '5px',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  margin: '18px 0 8px 15px'
                }}>
                <p style={{
                  fontSize: '15px',
                  fontWeight: '400'
                }}>
                  Email Me:
                </p>
                <button 
                  onClick={() => window.location = mailtoAddress}
                  style={{
                    fontWeight: '100',
                    fontSize: '15px',
                    textDecoration: 'underline' 
                  }}>
                    {emailAddress}
                </button>
                {!copied && (
                  <button style={{
                    display: 'flex', fontSize: '10px', alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2px 4px',
                    color: 'black',
                    backgroundColor: 'transparent',
                    border: '1px solid grey',
                    marginLeft: '5px',
                    borderRadius: '4px'
                  }} onClick={() => {
                    navigator.clipboard.writeText(emailAddress);
                    setCopied(true);
                  }}>Copy</button>
                )}
                {copied && (
                  <button style={{
                    display: 'flex', fontSize: '10px', alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2px 4px',
                    color: 'white',
                    backgroundColor: 'gray',
                    border: '1px solid white',
                    marginLeft: '5px',
                    borderRadius: '4px'
                  }}>Copied!</button>
                )}
              </div>

              <a href={findPhotoUrl} target="_blank" rel="noopener noreferrer" style={{
                alignSelf: 'flex-end', marginBottom: '-11px', fontSize: '12.5px', fontWeight: '100'
              }}>
                Where did I take the background picture? 🤔
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

