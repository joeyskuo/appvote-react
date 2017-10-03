import React, { Component } from 'react';
import BarChart from './BarChart';
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
      // var data = [{
      //         "name": "Option 1",
      //         "value": 20,
      // },
      //     {
      //         "name": "Option 2",
      //         "value": 12,
      // },
      //     {
      //         "name": "Option 3",
      //         "value": 19,
      // },
      //     {
      //         "name": "Option 4",
      //         "value": 5,
      // },
      //     {
      //         "name": "Option 5",
      //         "value": 16,
      // },
      //     {
      //         "name": "Option 6",
      //         "value": 26,
      // }];
      // let votes = this.getVotes();
      return (
        <BarChart data={this.state.data}/>
        //<BarGraph />
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
