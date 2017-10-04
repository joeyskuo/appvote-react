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

      var data = this.props.data;

      const barChart = new britecharts.bar();
      const { colorSchemas } = britecharts.colors;
      let barContainer = select('.js-horizontal-bar-chart-container'),
          containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false,
          dataset = [
    {name: 'Eggs', value: 5},
    {name: 'Milk', value: 9},
    {name: 'Bread', value: 3},
    {name: 'Coffee', value: 12},
    {name: 'Oat', value: 6},
    {name: 'Juice', value: 7}
];

      barChart
          .margin({
              left: 120,
              right: 20,
              top: 20,
              bottom: 20
          })
          .width(800)
          .height(300)
          .colorSchema([
            '#6aedc7', //green
            '#39c2c9', //blue
            '#ffce00', //yellow
            '#ffa71a', //orange
            '#f866b9', //pink
            '#998ce3' //purple
        ])
          .percentageAxisToMaxRatio(1.3)
          .isHorizontal(true)
          .isAnimated(true);

      barContainer.datum(data).call(barChart);
    }

    render() {

        return (
            <div className="barGraph">
              <div className="js-horizontal-bar-chart-container"></div>
            </div>
        )
    }
}

export default BarGraph;
