import React, { Component } from 'react';
import BarGraph from './BarGraph';
import PieGraph from './PieGraph';
import LineChart from './LineChart';
import '../css/_results.css';
import axios from 'axios';

class Results extends Component {


    render() {

        return (
            <div className="results">
              <div id="resultTop">
                  <PieGraph/>
                  <BarGraph/>
              </div>
              <div id="resultBottom">
                  <LineChart/>
              </div>
            </div>

        )
    }
}

export default Results;
