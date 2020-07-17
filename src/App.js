import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Logo from "./components/pages/Logo";

import Footer from "./components/Footer";

function App() {
  return (
      <Router basename="/">
        <div>
          <NavBar />
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/portfolio" component={Portfolio} /> */}
          <Footer />
        </div>
      </Router>
  );
}

export default App;
