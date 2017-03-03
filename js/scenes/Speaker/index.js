import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchSpeaker, setIsLoading } from '../../redux/modules/speakerReducer';
import SpeakerContainer from './SpeakerContainer';

class Speaker extends Component {
  constructor() {
    super();
  }
  
  static route = {
    navigationBar: {
      title: 'Session Speaker',
    }
  }

  componentDidMount() {
    console.log(this.props.speakerData);
    // this.props.fetchSpeaker(this.props.speakerData);
  }

  componentDidUpdate() {
    if (this.props.dataSource && this.props.isLoading) {
      // this.props.setIsLoading();
    }
  }

  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator 
          animating size="small" 
          color="black"
        />
      );
    } else {
      return (
        <SpeakerContainer 
          speaker={this.props.speakerData}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    // isLoading: state.speaker.isLoading,
    // dataSource: state.speaker.dataSource,
  };
};

const mapDispatchToProps = dispatch => ({
  /*fetchSpeaker: (speakerId) => {
    dispatch(fetchSpeaker(speakerId));
  },
  setIsLoading: () => {
    dispatch(setIsLoading());
  },*/
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Speaker);