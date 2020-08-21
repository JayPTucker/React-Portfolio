import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    <Container fluid>
      <Navbar />


    </Container>
  </Router>
  );
}

export default App;
