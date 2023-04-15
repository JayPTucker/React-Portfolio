// =========================================
// IMPORTS:
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
// =========================================

// =========================================
// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/Navbar';
import LoadingScreen from "./pages/LoadingScreen.js";
// =========================================



// =========================================

const App = () => {

  // ================================
  // Function for the loading screen
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading or other async tasks
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  
  // ================================

  return (
    
    <Router>
      {/* Implementation of loading screen */}
      {isLoading ? (
      <LoadingScreen /> // Display the loading screen if isLoading is true
      ) : (

        <Container className="mainContainer" fluid>
          <Navbar></Navbar>
          {/* Define routes and components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      )}
    </Router>
  );
};

export default App;
