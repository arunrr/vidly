import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './components/navBar';
import MovieMain from './components/movieMain';
import Customers from './components/customers';
import Rentals from './components/rentals';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import NotFound from './components/commons/notFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main className="container mt-4">
          <Switch>
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies" component={MovieMain} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
