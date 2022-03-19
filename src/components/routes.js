import { HashRouter, Route, Routes} from 'react-router-dom';
import About from '../pages/about';
import Contact from '../pages/contact';
import Home from '../pages/home';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';



export default function PageRoutes({isFirstMount}){

    const location = useLocation();

    return(
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home isFirstMount={isFirstMount} />} />  
                <Route path="/about" element={<About />} />  
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}