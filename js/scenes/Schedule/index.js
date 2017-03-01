import React, { Component } from 'react';
import { 
  ActivityIndicator,
  ListView,
  DataSource,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { fetchSchedule, setIsLoading } from '../../redux/modules/scheduleReducer';
import ScheduleContainer from './ScheduleContainer';
import { formatDataObject } from '../../navigation/dataFormatHelpers';

class Schedule extends Component {
  constructor() {
    super();

    /*this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });*/
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
    console.log(this.props.dataSource);
    if (this.props.isLoading) {
      return (
        <ActivityIndicator 
          animating size="small" 
          color="black"
        />
      );
    } else {
      return (
        <ScheduleContainer 
          items={this.props.dataSource}
        />
      );
    }
  }
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.schedule.isLoading, 
    dataSource: ds.cloneWithRowsAndSections(state.schedule.dataSource),
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

{/* 
  <ListView
          dataSource={this.props.dataSource}
          // renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderRow={(data) => <View>
                                <Text>{data}</Text>
                               </View>} 
        />
  
      <ScheduleContainer 
          items={this.props.dataSource}
        />*/}
