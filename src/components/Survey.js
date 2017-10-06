import React, { Component } from 'react';
import Card from './Card';
import options from './res/options';
import '../css/_survey.css';


class Survey extends Component {

  constructor() {
      super();

      this.state = {
          reveal: true,
          data: []
      }
  }
    showSurvey(){
      var that = this;
      const optionList = options.map((option, index) =>
        <Card key={index} appName={option.appName} onClick={() => that.setState({ reveal: false })}/>
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

            { this.state.reveal ? this.showSurvey() : "Empty" }

            </div>
        )
    }
}

export default Survey;
