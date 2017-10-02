import React, { Component } from 'react';
import BarChart from './BarChart';
import '../css/_survey.css';


class Results extends Component {

  constructor() {
      super();

      this.state = {
          reveal: false
      }
  }

    renderContent() {
      return (
        <BarChart data={[5,10,1,3]} size={[500,500]}/>
      )
    }

    render() {

        return (
            <div className="results">
              <button onClick={() => this.setState({ reveal: true })}>Show Results</button>
              <div>
              { this.state.reveal ? this.renderContent() : "Empty" }
              </div>
            </div>


        )
    }
}

export default Results;
