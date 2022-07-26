import HeaderBar from '../components/header'
import { motion } from "framer-motion"
import { useState } from 'react';
import image from "../images/background_img.jpg"
import profile from "../images/profile.jpeg";


require('react-dom');
window.React2 = require('react');
console.log(window.React1 == window.React2);



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
    <div className="absolute inset-0 flex items-end justify-center">
      <motion.div
        className="relative z-50 flex w-full bg-black items-center justify-center"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      /* onAnimationComplete={() =>
           /*document.body.classList.remove("overflow-hidden")
         }*/
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

const buttonLinks = [{ name: "GitHub", link: "https://github.com/summercody" }, { name: "LinkedIn", link: "https://www.linkedin.com/in/summercody/" }, { name: "Contact Me", link: null }] // "Resume", 


export default function Home({ isFirstMount }) {

  return (
    <motion.section exit={{ opacity: 0 }}>
      {isFirstMount && <InitialTransition />}
      <motion.div
        initial="initial"
        animate="animate"
        variants={content(isFirstMount)}
        style={{ position: 'relative' }}
      >
        <motion.div variants={background} style={{ position: "absolute", zIndex: -1, backgroundImage: `url(${image})`, height: '100vh', width: '100vw', backgroundSize: '100vw auto', opacity: '85%' }}></motion.div>
        <motion.section variants={header}>
          <HeaderBar />
        </motion.section>
        <motion.div variants={title} style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', borderRadius: '4px', display: 'flex', alignItems: 'center', padding: '45px', gap: '10px', backgroundColor: 'rgba(255,255,255,0.9)', marginTop: '40px', height: '480px', width: '800px' }}>
            <motion.div variants={prof}>
              <img src={profile} style={{ borderRadius: '80px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px', minWidth: '270px', height: '410px' }} />
            </motion.div>
            <div style={{ display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'right', justifyContent: 'center' }}>
                <text style={{ fontSize: '50px', fontWeight: '10' }}>Welcome!</text>
                <text style={{ fontSize: '15px', fontWeight: '150' }}>I'm Summer, a self-taught full stack developer with a passion for learning. Here are some ways you can get to know me:</text>
                <div className="buttonHolder" style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                  {buttonLinks.map((buttonLink) => {
                    if (buttonLink.name == "Contact Me") {
                      return (
                        <a href={buttonLink.link} target="_blank" rel="noopener noreferrer">
                          <button style={{ backgroundColor: '#e2b57f', padding: '10px', borderRadius: '20px', fontSize: '12px' }}>{buttonLink.name}</button>
                        </a>
                      )
                    } else {
                      return (
                        <a href={buttonLink.link} target="_blank" rel="noopener noreferrer">
                          <button style={{ backgroundColor: '#dedede', padding: '10px', borderRadius: '20px', fontSize: '12px' }}>{buttonLink.name}</button>
                        </a>
                      )
                    }
                  })}
                </div>
              </div>
              <ul style={{ display: 'flex', gap: '8px', marginBottom: '30px', justifyContent: 'flex-end', marginLeft: '15px'}}>
                  <li style={{ fontSize: '15px', fontWeight: '300'}}>Proficiencies: </li>
                  <li style={{ fontSize: '15px', fontWeight: '100'  }}>Python</li>
                  <li style={{ fontSize: '15px', fontWeight: '100'  }}>JS</li>
                  <li style={{ fontSize: '15px', fontWeight: '100'  }}>React</li>
                  <li style={{ fontSize: '15px', fontWeight: '100'  }}>PostgreSQL</li>
                  <li style={{ fontSize: '15px', fontWeight: '100'  }}>Flask</li>
                  {/* <li style={{ fontSize: '15px', fontWeight: '100'  }}>Pandas</li> */}
              </ul>
              <a href="https://www.google.com/search?q=coredo+muromachi&tbm=isch&ved=2ahUKEwil_bfEkJb5AhUkomoFHZN7BbYQ2-cCegQIABAA&oq=coredo+mu&gs_lcp=CgNpbWcQARgAMgUIABCABDIFCAAQgAQyBAgAEBgyBAgAEBgyBAgAEBg6BAgAEEM6CAgAELEDEIMBOggIABCABBCxAzoLCAAQgAQQsQMQgwE6BwgAEIAEEAo6BggAEB4QBToECAAQHjoGCAAQHhAIUM0FWLIRYOMbaABwAHgAgAFjiAG7BpIBAjEwmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=z6TfYuXZGaTEqtsPk_eVsAs&bih=714&biw=1235&client=firefox-b-1-d" target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-end', marginBottom: '-30px', fontSize: '12.5px', fontWeight: '100' }}>Where did I take the background picture? 🤔</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

