import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { fetchCodeOfConduct, setIsLoading } from '../../redux/modules/aboutReducer';
import AboutContainer from './AboutContainer';

class About extends Component {
  constructor() {
    super();
  }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  componentDidMount() {
    this.props.fetchCodeOfConduct();
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
        <AboutContainer 
          items={this.props.dataSource}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.about.isLoading,
    dataSource: state.about.dataSource,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCodeOfConduct: () => {
    dispatch(fetchCodeOfConduct());
  },
  setIsLoading: () => {
    dispatch(setIsLoading());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
