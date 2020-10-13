import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>Test App.js</h1>
    <div className="App">
      
      <Link to="/login">Login</Link>
      <Route exact path="/login" component={Login} />
    </div>
    </Router>
  );
}

export default App;
