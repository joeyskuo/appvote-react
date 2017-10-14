import React, { Component } from 'react';
import { select } from 'd3-selection';
import * as britecharts from 'britecharts';
import { connect } from 'react-redux';
import dummyData from './res/dummyData';
import '../css/_linechart.css';

class LineChart extends Component {

  formatData(rawData) {
    let data = [];
    for (var key in rawData){
      data.push({
        "name": key,
        "quantity": rawData[key]
      });
    }

    return data;
  }


    componentDidMount() {
       this.createLineChart()
    }

    createLineChart() {
      //var data = this.formatData(this.props.voteData);
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


      lineContainer.datum(dummyData).call(lineChart);

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
