import React, { Component } from 'react';
import { select } from 'd3-selection';
import * as britecharts from 'britecharts';
import { connect } from 'react-redux';
import dummyData from './res/dummyData';
import '../css/_linechart.css';

class AppData {
  constructor( appName, appId, voteDates) {
    this.topicName = appName;
    this.topic = appId;
    this.dates = voteDates;
  }
}

class LineChart extends Component {


  initializeDates(){
    let tempDate = {};

    // Starting date for line chart
    let day = new Date(2017, 9, 1);

    // While date is not today
    while (day.getDate() <= (new Date()).getDate()) {

       // create simplified date ISO string
       let tempDay = (new Date(day)).toISOString().substr(0,10) + "T07:00:00.000Z";

       // set voteCount to 0
       tempDate[tempDay] = 0;

       // move on to next day
       day.setDate(day.getDate() + 1);
    }

    return tempDate;
  }



  formatData(appVoteDates) {

    let data = {
      dataByTopic: []
    };

    // initial appId
    let appId = 1;

    // Create list of all dates since Oct 1 with empty vote counts
    let dateList = this.initializeDates();

    // for Facebook, Twitter, Instagram, etc...
    for (var appName in appVoteDates){

      // Copy list of empty dates
      let tempDate = Object.assign({}, dateList);

      // If app was found in any vote object, add one to vote count for that day
      appVoteDates[appName].forEach((date) => tempDate[date] += 1);

      // Format vote data as a list of dates and number of votes for that day
      let dates = [];
      for(var voteDate in tempDate) dates.push({fullDate: voteDate, value: tempDate[voteDate]});

      // Add all data for current app
      data.dataByTopic.push(new AppData(appName, appId, dates));

      // Next App
      appId += 1;
    }

    // Return data formatted for d3 rendering
    return data;
  }


    componentDidMount() {
       this.createLineChart();
       this.formatData(this.props.voteData);
    }

    createLineChart() {
      var data = this.formatData(this.props.voteData);
      //var data = this.props.data;

      const lineChart = new britecharts.line();
      const chartTooltip = new britecharts.tooltip();
      chartTooltip.title('Votes Received');

      let lineContainer = select('.js-line-chart-container'),
          containerWidth = lineContainer.node() ? lineContainer.node().getBoundingClientRect().width : false;

      lineChart
          .isAnimated(true)
          .height(300)
          //.aspectRatio(0.5)
          .grid('horizontal')
          //.tooltipThreshold(600)
          .width(containerWidth)
          .xAxisCustomFormat(lineChart.axisTimeCombinations.DAY_MONTH)
          .dateLabel('fullDate')
          .colorSchema([
            '#3b5998', //green // facebook
            '#00aced', //blue  // twitter
            '#dd4b39', //yellow // google
            '#007bb6', //orange // linkedin
            '#bc2a8d', //pink // instagram
            '#cb2027' //purple // pinterest
        ])
          .on('customMouseOver', chartTooltip.show)
          .on('customMouseMove', chartTooltip.update)
          .on('customMouseOut', chartTooltip.hide);


      lineContainer.datum(data).call(lineChart);

      const tooltipContainer = lineContainer.select('.metadata-group .hover-marker'); // Do this only after chart is display, `.hover-marker` is a part of the chart's generated SVG
      tooltipContainer.datum([]).call(chartTooltip);

    }

    render() {

        return (
            <div className="lineChart">
              <div className="lineContainer">
                <div id="line" className="js-line-chart-container"></div>
              </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { voteData: state.voteData }
}

export default connect(mapStateToProps, null)(LineChart);
