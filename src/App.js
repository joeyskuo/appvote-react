import React, { Component } from 'react';
import Survey from './components/Survey';
import Results from './components/Results';
import Frame from './components/Frame';
import './App.css';
import './css/britecharts.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Frame />
      </div>
    );
  }
}

export default App;
