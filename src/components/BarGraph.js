import React, { Component } from 'react';
import { select } from 'd3-selection';
import * as britecharts from 'britecharts';
import { connect } from 'react-redux';
import '../css/_chart.css';

class BarGraph extends Component {


  formatData(rawData) {
    let data = [];
    for (var key in rawData){
      data.push({
        "name": key,
        "value": rawData[key]
      });
    }

    return data;
  }

  componentDidMount() {
     this.createBarChart();
  }

    createBarChart() {

      var data = this.formatData(this.props.voteData);
      //console.log(this.props.data);
      const barChart = new britecharts.bar();
      let barContainer = select('.js-horizontal-bar-chart-container'),
          //containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false,
          dataset = [
    {name: 'Option 1', value: 5},
    {name: 'Option 2', value: 9},
    {name: 'Option 3', value: 3},
    {name: 'Option 4', value: 12},
    {name: 'Option 5', value: 6},
    {name: 'Option 6', value: 7}
];

      barChart
          .margin({
              left: 120,
              right: 20,
              top: 20,
              bottom: 20
          })
          .width(700)
          .height(300)
          .colorSchema([
            '#3b5998', //green // facebook
            '#00aced', //blue  // twitter
            '#dd4b39', //yellow // google
            '#007bb6', //orange // linkedin
            '#bc2a8d', //pink // instagram
            '#cb2027' //purple // pinterest
        ])
          .percentageAxisToMaxRatio(1.3)
          .isHorizontal(true)
          .isAnimated(true);

      barContainer.datum(data.reverse()).call(barChart);
    }

    render() {

        return (
            <div className="barGraph">
              <div className="chartContainer">
                <div className="js-horizontal-bar-chart-container"></div>
              </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { voteData: state.voteData }
}

export default connect(mapStateToProps, null)(BarGraph);
