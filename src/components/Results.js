import React, { Component } from 'react';
import BarChart from './BarChart';
import BarGraph from './BarGraph';
import '../css/_results.css';
import axios from 'axios';

class Results extends Component {

  constructor() {
      super();

      this.state = {
          reveal: false
      }
  }

    renderContent() {
      return (
        //<BarChart data={[5,10,1,3]} size={[500,500]}/>
        <BarGraph />
      )
    }

    async getData() {
      const res = await axios.get('/votes');
      console.log(res);
    }

    render() {

        return (
            <div className="results">
              <button onClick={() => this.setState({ reveal: true })}>Show Results</button>
              <button onClick={() => this.getData()}>Get Votes</button>
              <div>
              { this.state.reveal ? this.renderContent() : "Empty" }
              </div>
            </div>


        )
    }
}

export default Results;
