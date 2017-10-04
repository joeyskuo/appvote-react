import React, { Component } from 'react';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import * as britecharts from 'britecharts';
//import barChart from 'britecharts/dist/umd/bar.min';
import '../css/_chart.css';

class BarGraph extends Component {

  componentDidMount() {
     this.createBarChart()
  }

    createBarChart() {
      const barChart = new britecharts.bar();
      let barContainer = select('.js-horizontal-bar-chart-container'),
          containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false,
          dataset = [
    {
        value: 1,
        name: 'glittering'
    },
    {
        value: 1,
        name: 'luminous'
    }
];

      barChart
          .margin({
              left: 120,
              right: 20,
              top: 20,
              bottom: 5
          })
          .percentageAxisToMaxRatio(1.3)
          .isHorizontal(true)
          .isAnimated(true)
          //.colorSchema(colors.colorSchemas.britecharts)
          .width(500)
          .height(300);

      barContainer.datum(dataset).call(barChart);

    }

    render() {

        return (
            <div className="barGraph">
              <div className="js-horizontal-bar-chart-container">Bar Chart</div>
            </div>
        )
    }
}

export default BarGraph;
