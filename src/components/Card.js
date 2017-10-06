import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../css/_card.css';
import axios from 'axios';
import { showResults } from '../actions/index';

class Card extends Component {



    async postVote() {

      console.log("post request sent!");

      var testVote = {
        "appName": "testApp"
      };

      const res = await axios.post('/vote', testVote);
      console.log(res);

    }

    createGraph() {

    }

    render() {

        return (
            <div className="card" onClick={() => {
              this.postVote();
              this.props.showResults(true);}}>
              <p>{this.props.appName ? this.props.appName : "Test Card" }</p>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({showResults: showResults}, dispatch)
}


export default connect(null, mapDispatchToProps)(Card);
