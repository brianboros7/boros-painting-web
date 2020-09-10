import React from 'react';
import './styles/App.scss';
import Header from './components/header/Header'; 
import Gallery from './pages/gallery/Gallery'; 
import Home from './pages/landing/Home'; 

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom';

function App() {
  return (
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
    </Router>
  )
}

export default App;
