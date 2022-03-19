import './App.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageRoutes from './components/routes'



function App() {

  const [isFirstMount, setIsFirstMount] = useState(true);
  const location = useLocation();

  useEffect(() => {
      return () => {
        isFirstMount && setIsFirstMount(false);
      }

  }, [location]);

  return (
      <PageRoutes isFirstMount={isFirstMount} />
  );
}

export default App;
