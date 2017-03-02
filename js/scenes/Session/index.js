import React, { Component } from 'react';
import { 
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchSession, setIsLoading } from '../../redux/modules/sessionReducer';
import SessionContainer from './SessionContainer';

class Session extends Component {
  constructor() {
    super();
  }
  
  static route = {
    navigationBar: {
    title: 'Session',
    }
  }

  componentDidMount() {
    this.props.fetchSession(this.props.sessionData.speaker);
  }

  componentDidUpdate() {
    if (this.props.dataSource && this.props.isLoading) {
      this.props.setIsLoading();
    }
  }

  render() {
    console.log(this.props.dataSource)
    if (this.props.isLoading) {
      return (
        <ActivityIndicator 
          animating size="small" 
          color="black"
        />
      );
    } else {
      return (
        <SessionContainer 
          session={this.props.sessionData}
          speaker={this.props.dataSource}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.session.isLoading,
    dataSource: state.session.dataSource,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSession: (speakerId) => {
    dispatch(fetchSession(speakerId));
  },
  setIsLoading: () => {
    dispatch(setIsLoading());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Session);