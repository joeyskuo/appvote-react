import React, { Component } from 'react';
import BarGraph from './BarGraph';
import PieGraph from './PieGraph';
import '../css/_results.css';
import axios from 'axios';

class Results extends Component {

    constructor() {
        super();

        this.state = {
            reveal: false,
            data: []
        }
    }


    async componentWillMount() {
      let data = await this.getVotes();
       this.setState({ data: data });
       //console.log(this.state.data);
    }

    async getVotes() {
      const dataSet = await this.getData();
      let data = [];
      for (var key in dataSet){
        data.push({
          "name": key,
          "value": dataSet[key]
        });
      }
      //console.log("Success! Converted Data:")
      //console.log(data);
      return data;
    }

    renderContent() {
      return (
        <div id="resultData">
          <PieGraph data={this.state.data}/>
          <BarGraph/>
        </div>
      )
    }

    async getData() {
      const res = await axios.get('https://appvote-spring.herokuapp.com/votes');
      //console.log(res);
      const votes = res.data.votes;
      let voteList = {};

      votes.map((vote) => {
        if(voteList[vote.appName]) {
          voteList[vote.appName] += 1;
        } else {
          voteList[vote.appName] = 1;
        };

      });
      //console.log(voteList);
      return voteList;
    }

    render() {

        return (
            <div className="results">
              <div>
              { this.renderContent() }
              </div>
            </div>


        )
    }
}

export default Results;
