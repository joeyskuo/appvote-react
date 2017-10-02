import React, { Component } from 'react';
import Survey from './components/Survey';
import Results from './components/Results';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Survey />
        <Results />
      </div>
    );
  }
}

export default App;
