import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./components/pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <Container fluid>
      <Navbar />

      <HomePage />

      <Footer />

    </Container>
  </Router>
  );
}

export default App;
