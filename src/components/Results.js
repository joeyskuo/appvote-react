import React, { Component } from 'react';
import BarChart from './BarChart';
import BarGraph from './BarGraph';
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


    async componentDidMount() {
      let data = await this.getVotes();
       this.setState({ data: data });
       //console.log(data);
    }

    async getVotes() {
      const dataSet = await this.getData();
      console.log(dataSet);
      let data = [];
      for (var key in dataSet){
        data.push({
          "name": key,
          "value": dataSet[key]
        });
      }
      console.log("Success! Converted Data:")
      console.log(data);
      return data;
    }

    renderContent() {
      return (
        //<BarChart data={this.state.data}/>
        <BarGraph data={this.state.data}/>
      )
    }

    async getData() {
      const res = await axios.get('/votes');
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
              <button onClick={() => this.setState({ reveal: true })}>Show Results</button>
              <button onClick={() => this.getVotes()}>Get Votes</button>
              <div>
              { this.state.reveal ? this.renderContent() : "Empty" }
              </div>
            </div>


        )
    }
}

export default Results;
