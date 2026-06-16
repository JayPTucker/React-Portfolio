// =========================================
// IMPORTS:
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
// =========================================

// =========================================
// PAGES
import Home from './pages/Home';
// import About from './pages/About';
import Navbar from './pages/Navbar';
import LoadingScreen from "./pages/LoadingScreen.js";
// =========================================



// =========================================

const App = () => {

  // ================================
  // Function for the loading screen
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    // Simulate data loading or other async tasks
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  
  // ================================
  // Mouse tracking effect for background
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  // ================================

  return (
    
    <Router>
      <CSSTransition
        in={!isLoading} // Condition to trigger the animation
        timeout={4000} // Duration of the animation in milliseconds
        classNames="fade" // CSS class prefix for the animation
        unmountOnExit
        nodeRef={containerRef}
      >
        <Container className="mainContainer" fluid ref={containerRef}>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </Container>
      </CSSTransition>
      {isLoading && <LoadingScreen />}
    </Router>
  );
};

export default App;
