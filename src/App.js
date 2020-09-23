import React from 'react';
import './styles/App.scss';
import Header from './components/app/header/Header'; 
import Gallery from './pages/gallery/Gallery'; 
import Home from './pages/landing/Home'; 
import Footer from './components/app/footer/Footer'; 

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Header /> 
        <Switch>
          <Route
            path="/" exact>
              <Home /> 
          </Route>
          <Route
            path="/gallery"> 
              <Gallery   /> 
          </Route>
        </Switch>
        <Footer /> 
      </Router>
    </div> 
  )
}

export default App;
