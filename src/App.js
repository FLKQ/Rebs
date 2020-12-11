import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Navibar from './components/Navibar';
import Footer from './components/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Home} from './Home';
import {Users} from './Users';
import {About} from './About';



function App() {
  return (
    <>
    <Router> 
        <Navibar/>
          <Switch>
          
          
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/about" component={About} />
          </Switch>
    </Router> 
    <Footer/>     

    </>

  );
}

export default App;
