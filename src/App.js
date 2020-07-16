import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Logo} />
      <Route exact path="/" component={About} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/portfolio" component={Portfolio} />

    </div>
  );
}

export default App;
