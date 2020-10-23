import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import './index.css';
import Service from "./Service";
import Contact from "./Contact";
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Navbar from './Navbar';

const App = ()=> {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact  path="/about" component={About}/>
      <Route exact  path="/contact" component={Contact}/>
      <Route exact  path="/service" component={Service}/>
      <Redirect to="/"/>   
        
      
    </Switch>
   
    
   
    </>
    
  );
}

export default App;

