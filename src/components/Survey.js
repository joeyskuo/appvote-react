import React, { Component } from 'react';
import Card from './Card';
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
            </div>
        )
    }
}

export default Survey;
