import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import {Friends} from "./components/Friends";

function App() {
  return (
    <Router>
      <h1>Friends App</h1>
    <div className="App">
      <PrivateRoute exact path="/protected" component={Friends}/>
      <Link to="/login">Login</Link>
      <Route exact path="/login" component={Login} />
    </div>
    </Router>
  );
}

export default App;
