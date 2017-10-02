import React, { Component } from 'react';
import '../css/_card.css';
import axios from 'axios';

class Card extends Component {

    postVote() {

      console.log("post request sent!");


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
