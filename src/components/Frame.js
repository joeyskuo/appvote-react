import React, { Component } from 'react';
import { connect } from 'react-redux';
import Survey from './Survey';
import Results from './Results';

class Frame extends Component {

  renderContent() {
    return (
      <div>
        <Results />
      </div>
    )
  }

  render() {
    return (
      <div className="frame">


        <div>
            { this.props.voted ? <Results/> : <Survey /> }
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    voted: state.voted
  };
}

export default connect(mapStateToProps, null)(Frame);
