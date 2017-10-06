import React, { Component } from 'react';
import Survey from './Survey';
import Results from './Results';

class Frame extends Component {

  constructor() {
      super();

      this.state = {
          reveal: false,
          data: []
      }

      this.showResults = this.showResults.bind(this);
  }

  showResults() {
    console.log(this.state.reveal);
    this.setState({reveal: true});
    console.log("executed!");
    
    console.log(this.state.reveal);
  }

  render() {
    return (
      <div className="frame">
        <div>
          <Survey showResults={this.showResults}/>
        </div>
        <div>
          <Results />
        </div>
      </div>
    );
  }
}

export default Frame;
