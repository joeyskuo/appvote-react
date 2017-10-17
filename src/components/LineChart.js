import React, { Component } from 'react';
import { select } from 'd3-selection';
import * as britecharts from 'britecharts';
import { connect } from 'react-redux';
import dummyData from './res/dummyData';
import chartService from './res/chartService';
import '../css/_linechart.css';


class LineChart extends Component {

    componentDidMount() {
       this.createLineChart();
    }

    createLineChart() {
      var data = chartService.formatData(this.props.voteData);

      const lineChart = new britecharts.line();
      const chartTooltip = new britecharts.tooltip();
      chartTooltip.title('Votes Received');

      let lineContainer = select('.js-line-chart-container'),
          containerWidth = lineContainer.node() ? lineContainer.node().getBoundingClientRect().width : false;

      lineChart
          .isAnimated(true)
          .height(300)
          .grid('horizontal')
          .width(containerWidth)
          .xAxisCustomFormat(lineChart.axisTimeCombinations.DAY_MONTH)
          .dateLabel('fullDate')
          .colorSchema([
            '#3b5998', // facebook
            '#00aced', // twitter
            '#dd4b39',  // google
            '#007bb6', // linkedin
            '#bc2a8d', // instagram
            '#cb2027' // pinterest
        ])
          .on('customMouseOver', chartTooltip.show)
          .on('customMouseMove', chartTooltip.update)
          .on('customMouseOut', chartTooltip.hide);


      lineContainer.datum(data).call(lineChart);

      const tooltipContainer = lineContainer.select('.metadata-group .hover-marker');
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
