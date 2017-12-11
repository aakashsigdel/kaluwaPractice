import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import { Login } from './Login'
import { Signup } from './Signup'
import {Welcome} from './Welcome'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/welcome" component={Welcome} />
          <Route exact path="/" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
