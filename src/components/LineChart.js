import React, { Component } from 'react';
import { select } from 'd3-selection';
import * as britecharts from 'britecharts';
import { connect } from 'react-redux';
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
      chartTooltip.title('Vote Count');

      let lineContainer = select('.js-line-chart-container'),
          containerWidth = lineContainer.node() ? lineContainer.node().getBoundingClientRect().width : false,
          dataset = {
              dataByTopic: [
                  {
                      topicName: 'San Francisco',
                      topic: 123,
                      dates: [
                          {

                              value: 1,
                              'fullDate': '2015-06-27T07:00:00.000Z'
                          },
                          {

                              value: 2,
                              'fullDate': '2015-06-30T07:00:00.000Z'
                          }
                      ]
                  },
                  {
                      topicName: 'Other',
                      topic: 345,
                      dates: [
                          {

                              value: 1,
                              'fullDate': '2015-06-30T07:00:00.000Z'

                          },
                          {

                              value: 2,
                              'fullDate': '2015-06-27T07:00:00.000Z'
                          }
                      ]
                  }
              ]
          };

      lineChart
          .isAnimated(true)
          .height(300)
          //.aspectRatio(0.5)
          .grid('horizontal')
          //.tooltipThreshold(600)
          .width(containerWidth)
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


      lineContainer.datum(dataset).call(lineChart);

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
