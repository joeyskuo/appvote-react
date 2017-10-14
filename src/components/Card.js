import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../css/_card.css';
import axios from 'axios';
import { showResults, setVoteData } from '../actions/index';
import facebook from './res/images/facebook.png';
import google from './res/images/google-plus.png';
import instagram from './res/images/instagram.png';
import linkedin from './res/images/linkedin.png';
import pinterest from './res/images/pinterest.png';
import twitter from './res/images/twitter.png';

class Card extends Component {

  getIcon(name){
    switch(name){
      case "google": return google;
      case "facebook": return facebook;
      case "instagram": return instagram;
      case "linkedin": return linkedin;
      case "pinterest": return pinterest;
      case "twitter": return twitter;
      default: return twitter;
    }
  }


  async getData() {
    const res = await axios.get('https://appvote-spring.herokuapp.com/votes');
    console.log(res);
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

    render() {

        return (
            <div className="card" onClick={() => this.postVote()}>
              <img className="cardIcon" src={this.getIcon(this.props.icon)}></img>
              <h4>{this.props.appName}</h4>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({showResults: showResults, setVoteData: setVoteData}, dispatch)
}


export default connect(null, mapDispatchToProps)(Card);
