import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
// import styles from './styles';

class Schedule extends Component {
  constructor() {
    super();
  }
  
  static route = {
    navigationBar: {
    title: 'Schedule',
    }
  }

  render() {
    return (
      <View>
        <Text>Schedule</Text>
      </View>
    );
  }
}

export default Schedule;
