import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';

import Navbar from './components/Navbar';
import HomePage from './components/pages/Home';
import AboutPage from './components/pages/About'; // import the AboutPage component
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Container className='mainContainer' fluid>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
