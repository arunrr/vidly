import React, { Component } from 'react';

import MovieMain from './components/movieMain';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="container mt-4">
          <MovieMain />
        </main>
      </div>
    );
  }
}

export default App;
