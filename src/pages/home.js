import HeaderBar from '../components/header'
import { motion } from "framer-motion"
import { useState } from 'react';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 == window.React2);



const blackBox = {

    initial: {
        height: "100vh",
        bottom: 0,
        backgroundColor: "#000000",
        position: 'relative',
        zIndex: 50,
        width: '100vw',
    },
    animate: {
        height: 0,
        backgroundColor: "#000000",
        transition: {
            when: 'afterChildren',
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1]
        }
    }
};

const InitialTransition = () => {
    return (
        <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center'
        }}>
            <motion.div
                className="relative z-50 w-full bg-black"
                initial="initial"
                animate="animate"
                variants={blackBox}
                onAnimationStart={() => document.body.classList.add("overflow-hidden")}
                onAnimationComplete={() =>
                    document.body.classList.remove("overflow-hidden")
                  }
            />

        </div>
    )
}


export default function Home({isFirstMount}) {

    return (
        <motion.div exit={{ opacity: 0 }}>
            {isFirstMount && <InitialTransition />}
            <HeaderBar />
            <h2 style={{ marginTop: '30px', marginLeft: '25px' }}>Welcome</h2>
        </motion.div> 
    );
}

