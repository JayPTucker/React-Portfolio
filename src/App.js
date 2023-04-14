// src/App.js

import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/Navbar';

import { Container } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Container className="mainContainer" fluid>
        <Navbar></Navbar>
        {/* Define routes and components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
