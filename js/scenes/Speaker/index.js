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
      title: 'Speaker',
    }
  }

  componentDidMount() {
    // this.props.fetchSpeaker(this.props.speakerData.speaker);
  }

  componentDidUpdate() {
    if (this.props.dataSource && this.props.isLoading) {
      this.props.setIsLoading();
    }
  }

  render() {
    console.log('speaker')
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
          //session={this.props.speakerData}
          //speaker={this.props.dataSource}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.speaker.isLoading,
    dataSource: state.speaker.dataSource,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSpeaker: (speakerId) => {
    dispatch(fetchSpeaker(speakerId));
  },
  setIsLoading: () => {
    dispatch(setIsLoading());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Speaker);