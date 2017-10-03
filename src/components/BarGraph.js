import React, { Component } from 'react';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import '../css/_chart.css';

class BarGraph extends Component {

  componentDidMount() {
     this.createBarChart()
  }

    createBarChart() {
      var data = [4, 8, 15, 16, 23, 42];

      var x = scaleLinear()
          .domain([0, max(data)])
          .range([0, 420]);

      select(".chart")
        .selectAll("div")
          .data(data)
        .enter().append("div")
          .style("width", function(d) { return x(d) + "px"; })
          .text(function(d) { return d; });
    }

    render() {

        return (
            <div className="barGraph">
              <div className="chart">Bar Chart</div>
            </div>
        )
    }
}

export default BarGraph;
