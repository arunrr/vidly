import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './components/navBar';
import MovieMain from './components/movieMain';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main className="container mt-4">
          <Switch>
            <Route path="/movies" component={MovieMain} />
            <Redirect from="/" to="/movies" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
