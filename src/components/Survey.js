import React, { Component } from 'react';
import Card from './Card';
import options from './res/options';
import '../css/_survey.css';


class Survey extends Component {

    render() {

        return (
            <div className="survey">

            <p>Survey Question Placeholder</p>
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
