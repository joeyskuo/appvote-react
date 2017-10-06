import React, { Component } from 'react';
import Survey from './components/Survey';
import Results from './components/Results';
import './App.css';
import './css/britecharts.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Survey />
        </div>
        <div>
          <Results />
        </div>
      </div>
    );
  }
}

export default App;
