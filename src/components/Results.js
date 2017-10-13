import React, { Component } from 'react';
import BarGraph from './BarGraph';
import PieGraph from './PieGraph';
import '../css/_results.css';
import axios from 'axios';

class Results extends Component {


    render() {

        return (
            <div className="results">
              <div id="resultData">
                <PieGraph/>
                <BarGraph/>
              </div>
            </div>

        )
    }
}

export default Results;
