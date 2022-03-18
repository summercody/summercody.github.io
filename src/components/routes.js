import { HashRouter, Route, Routes} from 'react-router-dom';
import About from '../pages/about';
import Contact from '../pages/contact';
import Home from '../pages/home';


export default function PageRoutes(){
    return(
        <Routes>
            <Route exact path="/" element={<Home />} />  
            <Route path="/about" element={<About />} />  
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}