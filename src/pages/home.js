import { motion } from "framer-motion";

require('react-dom');
window.React2 = require('react');
console.log(window.React1 == window.React2);

export default function Home() {
    return (
        <h2 style={{ marginTop: '80px', marginLeft: '25px' }}>Welcome</h2>
    );
}

