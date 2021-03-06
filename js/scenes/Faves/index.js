import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, ListView } from 'react-native';
import { realm } from '../../config/models';
import { fetchFaves, setIsLoading } from '../../redux/modules/favesReducer';
import ScheduleContainer from '../Schedule/ScheduleContainer';
import LoadingSpinner from '../../components/LoadingSpinner';

class Faves extends Component {
  constructor() {
    super();

    realm.addListener('change', () => {
      this.props.fetchFaves();
    });
  }
  
  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  componentDidMount() {
    this.props.fetchFaves();
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
         <ScheduleContainer 
          items={this.props.dataSource}
          origin={'faves'}
        />
      );
    }
  }
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.faves.isLoading,
    dataSource: ds.cloneWithRowsAndSections(
      state.faves.dataSource.dataBlob,
      state.faves.dataSource.sectionIds,
      state.faves.dataSource.rowIds
    ),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchFaves: () => {
    dispatch(fetchFaves());
  },
  setIsLoading: () => {
    dispatch(setIsLoading());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Faves);
