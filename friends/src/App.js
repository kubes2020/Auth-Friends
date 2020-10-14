import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import {Friends} from "./components/Friends";
import {FindFriend} from "./components/FindFriend";
import { CreateFriend } from "./components/CreateFriend";

function App() {
  return (
    <Router>
      <h1>Friends App</h1>
      <ul>
        <li>
        <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friends">Friends</Link>
        </li>
        <li>
          <Link to="/friends/id">Friends By Id</Link>
        </li>
        <li>
          <Link to="/friends/create">Create Friend</Link>
        </li>
      </ul>
    <div className="App">
      <PrivateRoute exact path="/friends" component={Friends}/>
      <PrivateRoute exact path="/friends/id" component={FindFriend}/>
      <PrivateRoute exact path="/friends/create" component={CreateFriend}/>
      <Route exact path="/login" component={Login} />
    </div>
    </Router>
  );
}

export default App;
