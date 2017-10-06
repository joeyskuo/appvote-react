import React, { Component } from 'react';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import * as britecharts from 'britecharts';
import '../css/_piegraph.css';

class PieGraph extends Component {

    componentDidMount() {
       this.createPieChart()
    }

    createPieChart() {

      var data = this.props.data;

      const pieChart = new britecharts.donut();
      const { colorSchemas } = britecharts.colors;
      let barContainer = select('.js-horizontal-bar-chart-container'),
          containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false,
          dataset = [
            {name: 'Option 1', quantity: 5, id: 1},
            {name: 'Option 2', quantity: 9, id: 2},
            {name: 'Option 3', quantity: 3, id: 3},
            {name: 'Option 4', quantity: 12, id: 4},
            {name: 'Option 5', quantity: 6, id: 5},
            {name: 'Option 6', quantity: 7, id: 6}
          ];

          var legendChart = new britecharts.legend(),
              legendContainer = select('.js-legend-chart-container'),
              legendContainerWidth = legendContainer.node() ? legendContainer.node().getBoundingClientRect().width : false;

      pieChart
          .margin({
              left: 120,
              right: 20,
              top: 20,
              bottom: 20
          })
          .width(500)
          .height(300)
          .internalRadius(70)
          .colorSchema([
            '#6aedc7', //green
            '#39c2c9', //blue
            '#ffce00', //yellow
            '#ffa71a', //orange
            '#f866b9', //pink
            '#998ce3' //purple
        ])
          .isAnimated(true)
          .on('customMouseOver', function(data) {
              legendChart.highlight(data.data.id);
          })
          .on('customMouseOut', function() {
              legendChart.clearHighlight();
          });

          legendChart
              .width(800)
              .height(200)

              .isHorizontal(true)
              .numberFormat('s')
              .colorSchema([
                '#6aedc7', //green
                '#39c2c9', //blue
                '#ffce00', //yellow
                '#ffa71a', //orange
                '#f866b9', //pink
                '#998ce3' //purple
            ]);

      barContainer.datum(dataset).call(pieChart);
      legendContainer.datum(dataset).call(legendChart);
    }

    render() {

        return (
            <div className="pieGraph">
              <div id="pie" className="js-horizontal-bar-chart-container"></div>
              <div id="legend" className="js-legend-chart-container"></div>
            </div>
        )
    }
}

export default PieGraph;
