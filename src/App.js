import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HeaderBar from './components/header';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import PageRoutes from './components/routes'
import { AnimatePresence } from "framer-motion";


function App() {

  return (
    <div className="App">
      <HeaderBar />
      <PageRoutes />
    </div>
  );
}

export default App;
