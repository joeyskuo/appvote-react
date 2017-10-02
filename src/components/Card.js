import React, { Component } from 'react';
import '../css/_card.css';
import axios from 'axios';

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
            <div className="card" onClick={() => this.postVote()}>
              <p>Test Card</p>
            </div>
        )
    }
}

export default Card;
