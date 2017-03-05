import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchSession, setIsLoading } from '../../redux/modules/sessionReducer';
import SessionContainer from './SessionContainer';
import LoadingSpinner from '../../components/LoadingSpinner';

class Session extends Component {
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
    if (this.props.isLoading) {
      return (
        <LoadingSpinner />
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