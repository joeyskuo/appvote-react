import React, { Component } from 'react';
import Card from './Card';
import options from './res/options';
import '../css/_survey.css';


class Survey extends Component {

    showSurvey(){
      const optionList = options.map((option, index) =>
        <Card key={index} appName={option.appName}/>
      );

      return(
        <div id="Survey">
          <div>
            <div className="cardRow">
              {optionList.slice(0,3)}
            </div>
          </div>
          <div>
            <div className="cardRow">
              {optionList.slice(3,6)}
            </div>
        </div>
        </div>
      )
    }

    render() {



        return (
            <div className="survey">

            <p>Survey Question Placeholder</p>

            { this.showSurvey() }
            </div>
        )
    }
}

export default Survey;
