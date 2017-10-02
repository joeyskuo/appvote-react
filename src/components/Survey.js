import React, { Component } from 'react';
import Card from './Card';
import BarGraph from './BarGraph';
import BarChart from './BarChart';
import '../css/_survey.css';


class Survey extends Component {

    render() {

        return (
            <div className="survey">
            <div>
              <div className="cardRow">
                <Card/>
                <Card/>
                <Card/>
              </div>
            </div>
            <div>
              <div className="cardRow">
                <Card/>
                <Card/>
                <Card/>
              </div>
            </div>
              <BarGraph/>
              <BarChart data={[5,10,1,3]} size={[500,500]}/>
            </div>
        )
    }
}

export default Survey;
