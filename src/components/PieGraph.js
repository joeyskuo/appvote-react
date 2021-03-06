import React, { Component } from 'react';
import { select } from 'd3-selection';
import * as britecharts from 'britecharts';
import { connect } from 'react-redux';
import '../css/_piegraph.css';

class PieGraph extends Component {

  formatData(rawData) {
    let data = [];
    for (var key in rawData){
      data.push({
        "name": key,
        "quantity": rawData[key].length
      });
    }

    return data;
  }


    componentDidMount() {
       this.createPieChart()
    }

    createPieChart() {
      var data = this.formatData(this.props.voteData);
      //var data = this.props.data;

      const pieChart = new britecharts.donut();
      let barContainer = select('.js-pie-chart-container'),
          //containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false,
          dataset = [
            {name: 'Option 1', quantity: 5, id: 1},
            {name: 'Option 2', quantity: 9, id: 2},
            {name: 'Option 3', quantity: 3, id: 3},
            {name: 'Option 4', quantity: 12, id: 4},
            {name: 'Option 5', quantity: 6, id: 5},
            {name: 'Option 6', quantity: 7, id: 6}
          ];

      pieChart
          .margin({
              left: 120,
              right: 20,
              top: 20,
              bottom: 20
          })
          .width(400)
          .height(220)
          .externalRadius(110)
          .internalRadius(50)
          .colorSchema([
            '#3b5998', //green // facebook
            '#00aced', //blue  // twitter
            '#dd4b39', //yellow // google
            '#007bb6', //orange // linkedin
            '#bc2a8d', //pink // instagram
            '#cb2027' //purple // pinterest
        ])
          .isAnimated(true);

          // .on('customMouseOver', function(data) {
          //     legendChart.highlight(data.data.id);
          // })
          // .on('customMouseOut', function() {
          //     legendChart.clearHighlight();
          // });

          var legendChart = new britecharts.legend(),
              legendContainer = select('.js-legend-chart-container'),
              legendContainerWidth = legendContainer.node() ? legendContainer.node().getBoundingClientRect().width : false;

          legendChart
              .width(330)
              .height(70)
              .isHorizontal(true)
              .numberFormat('s')

              .colorSchema([
                '#3b5998', //green // facebook
                '#00aced', //blue  // twitter
                '#dd4b39', //yellow // google
                '#007bb6', //orange // linkedin
                '#bc2a8d', //pink // instagram
                '#cb2027' //purple // pinterest
            ]);

      barContainer.datum(data).call(pieChart);
      legendContainer.datum(data).call(legendChart);
    }

    render() {

        return (
            <div className="pieGraph">
              <div className="dataContainer">
              <div id="pie" className="js-pie-chart-container"></div>
              <div id="legend" className="js-legend-chart-container"></div>
              </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { voteData: state.voteData }
}

export default connect(mapStateToProps, null)(PieGraph);
