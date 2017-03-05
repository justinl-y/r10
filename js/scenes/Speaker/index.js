import React, { Component, PropTypes } from 'react';
import SpeakerContainer from './SpeakerContainer';

class Speaker extends Component {
  render() {
    return (
      <SpeakerContainer
        navigator={this.props.navigator}
        speaker={this.props.speakerData}
      />
    );
  }
}

Speaker.propTypes = {
  navigator: PropTypes.object.isRequired,
  speakerData: PropTypes.object.isRequired,
};

export default Speaker;
