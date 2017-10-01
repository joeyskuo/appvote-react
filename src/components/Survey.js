import React, { Component } from 'react';
import Card from './Card'
import '../css/_survey.css';


class Survey extends Component {

    render() {

        return (
            <div className="survey">
              <Card/>
              <Card/>
              <Card/>
            </div>
        )
    }
}

export default Survey;
