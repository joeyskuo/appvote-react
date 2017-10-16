import React, { Component } from 'react';
import { select } from 'd3-selection';
import * as britecharts from 'britecharts';
import { connect } from 'react-redux';
import dummyData from './res/dummyData';
import '../css/_linechart.css';

class LineChart extends Component {


  // completely refactor asap
  formatData(rawData) {
    let data = {
      dataByTopic: []
    };

    let i = 1;

    // for [ Facebook, Twitter, Instagram, etc... ]
    for (var key in rawData){
      let appData = {};
      let dates = [];
      let tempDate = {};

      let day = new Date(2017, 9, 1);
      var days = [];
      while (day.getDate() <= (new Date()).getDate()) {
         let tempDay = (new Date(day)).toISOString().substr(0,10) + "T07:00:00.000Z";
         tempDate[tempDay] = 0;
         //days.push();
         day.setDate(day.getDate() + 1);
      }
      //console.log(days);

      // for index in [0: "2017-10-13T07:00:00.00Z", 1: "2017-10-13T07:00:00.00Z"]
      for (var dateIndex in rawData[key]) {
        //console.log(rawData[key]);
        //console.log(`${date} for key ${key}`);

        let date = rawData[key][dateIndex];
        if(tempDate[date]) {
          tempDate[date] += 1;
        } else {
          tempDate[date] = 1;
        };
      }

      //Create voteCount object for dates[]

      for (var voteDate in tempDate) {
        let tempVotes = {};

        // tempVotes = { 'fullDate': "12-02-17T01:XXXXXXX", 'value': 2}
        tempVotes.fullDate = voteDate;
        tempVotes.value = tempDate[voteDate];
        dates.push(tempVotes);
      }


      appData.topicName = key;
      appData.topic = i;
      appData.dates = dates;

      data.dataByTopic.push(appData);
      // data.push({
      //   "name": key,
      //   "quantity": rawData[key]
      // });
      i += 1;
    }
    console.log(data);
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
