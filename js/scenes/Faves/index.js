import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchRealmFaves, fetchFaves, setIsLoading } from '../../redux/modules/favesReducer';
import FavesContainer from './FavesContainer';

import { getFaves } from '../../config/models';

class Faves extends Component {
  constructor() {
    super();
  }
  
  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  componentDidMount() {
    // this.props.fetchFaves();
    console.log(getFaves());
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
        <FavesContainer 
          faves={this.props.dataSource}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.faves.isLoading,
    dataSource: state.faves.dataSource,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchFaves: () => {
    dispatch(fetchSession());
  },
  setIsLoading: () => {
    dispatch(setIsLoading());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Faves);