import React, { Component, PropTypes } from 'react';
import SpeakerContainer from './SpeakerContainer';

class Speaker extends Component {
  static route = {
    /*navigationBar: {
      title: 'Session Speaker',
   }*/
  }

  render() {
    return (
      <SpeakerContainer
        speaker={this.props.speakerData}
      />
    );
  }
}

Speaker.propTypes = {
  speakerData: PropTypes.object.isRequired,
};

export default Speaker;
