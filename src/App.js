// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/Navbar';

import { Container } from 'react-bootstrap';

import './styles/App.css';

const App = () => {
  return (
    <Router className="test">
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
