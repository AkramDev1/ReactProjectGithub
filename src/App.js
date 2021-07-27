import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Users from './components/users/Users';
import Navbar from './components/patials/Navbar';
import UserItem from './components/users/UserItem';

import './App.css';

function App() {

  return (
    <Router>

      <div className="App" >

        <Navbar />
        <div className="container mt-4">
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:login" component={UserItem} />
            <Route exact component={Users} />
          </Switch>
        </div>

      </div>

    </Router>

  );
}

export default App;