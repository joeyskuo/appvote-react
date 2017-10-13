import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../css/_card.css';
import axios from 'axios';
import { showResults, setVoteData } from '../actions/index';

class Card extends Component {

  async getData() {
    const res = await axios.get('https://appvote-spring.herokuapp.com/votes');
    const votes = res.data.votes;
    let voteList = {};

    votes.map((vote) => {
      if(voteList[vote.appName]) {
        voteList[vote.appName] += 1;
      } else {
        voteList[vote.appName] = 1;
      };

    });
    return voteList;
  }

    async postVote() {

      console.log("post request sent!");

      var testVote = {
        "appName": this.props.appName
      };

      const res = await axios.post('https://appvote-spring.herokuapp.com/vote', testVote);

      let data = await this.getData();
      await this.props.setVoteData(data);
      this.props.showResults(true);

    }

    createGraph() {

    }

    render() {

        return (
            <div className="card" onClick={() => {
              this.postVote();
              }}>
              <p>{this.props.appName ? this.props.appName : "Test Card" }</p>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({showResults: showResults, setVoteData: setVoteData}, dispatch)
}


export default connect(null, mapDispatchToProps)(Card);
