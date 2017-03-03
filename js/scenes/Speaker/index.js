import React, { Component } from 'react';
import SpeakerContainer from './SpeakerContainer';

class Speaker extends Component {
  static route = {
    navigationBar: {
      title: 'Session Speaker',
    }
  }

  render() {
    return (
        <SpeakerContainer 
          speaker={this.props.speakerData}
        />
      );
    }
  }

export default Speaker;