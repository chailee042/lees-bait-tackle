import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/Home/Home';
import Products from './components/pages/Products/Products';
import Service from './components/pages/Service/Service';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" component={Products} />
        </Switch>
        <Footer />
      </Router>  
    </>
  );
}

export default App;
