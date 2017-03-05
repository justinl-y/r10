import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { realm } from '../../config/models';
import { fetchSchedule, setIsLoading } from '../../redux/modules/scheduleReducer';
import ScheduleContainer from './ScheduleContainer';
import LoadingSpinner from '../../components/LoadingSpinner';

class Schedule extends Component {
  constructor() {
    super();

    realm.addListener('change', () => {
      this.props.fetchSchedule();
    });
  }
  
  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  componentDidMount() {
    this.props.fetchSchedule();
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
          origin={'schedule'}
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
    isLoading: state.schedule.isLoading,
    dataSource: ds.cloneWithRowsAndSections(
      state.schedule.dataSource.dataBlob,
      state.schedule.dataSource.sectionIds,
      state.schedule.dataSource.rowIds
    ),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSchedule: () => {
    dispatch(fetchSchedule());
  },
  setIsLoading: () => {
    dispatch(setIsLoading());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Schedule);
