import HeaderBar from '../components/header'
import { motion } from "framer-motion"
import { useState } from 'react';

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
        transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.5: 0 }
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


export default function Home({isFirstMount}) {

    return (
        <motion.section exit={{ opacity: 0 }}>
            {isFirstMount && <InitialTransition />}

            <motion.div
                initial="initial"
                animate="animate"
                variants={content(isFirstMount)}
            >
                <motion.section variants={header}>
                    <HeaderBar />
                </motion.section>
                <motion.div variants={title} className="flex items-center justify-center">
                    <text style={{ marginTop: '100px', fontSize: '50px', fontWeight: '10' }}>Welcome</text>
                </motion.div>
            </motion.div>
        </motion.section> 
    );
}

