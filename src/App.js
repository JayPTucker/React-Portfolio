import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import NavBar from "./components/NavBar";

import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import Portfolio from "./components/pages/Portfolio";

import Footer from "./components/Footer";

function App() {
  return (
      <Router basename="/">
        <Container fluid>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Footer />
        </Container>
      </Router>
  );
}

export default App;
