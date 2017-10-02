import React, { Component } from 'react';
import '../css/_card.css';


class Card extends Component {

    postVote() {
      console.log("post request sent!");
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
