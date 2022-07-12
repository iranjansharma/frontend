import { FC, useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Loader from './components/Loader/Loader';
import Nav from './components/Nav/Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import Work from './pages/Skills';

const App: FC = () => {
  const currentRef = useRef(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentRef.current === false) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2500);

      return () => {
        currentRef.current = true;
      };
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <div className='bg-gradient-to-r from-[#5153cc] to-[#2ac9cd] h-screen'>
            <Nav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route />
              <Route path='/about' element={<About />} />
              <Route />
              <Route path='/work' element={<Work />} />
              <Route />
              <Route path='/projects' element={<Projects />} />
              <Route />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
