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
    //this.props.fetchSession(sessionId);
  }

  componentDidUpdate() {
    if (this.props.dataSource && this.props.isLoading) {
      this.props.setIsLoading();
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
        <SessionContainer 
          items={this.props.dataSource}
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
  fetchSession: () => {
    dispatch(fetchSession());
  },
  setIsLoading: () => {
    dispatch(setIsLoading());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Session);