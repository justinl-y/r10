import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
// import styles from './styles';

class AppMap extends Component {
  constructor() {
    super();
  }
  
  static route = {
    navigationBar: {
    title: 'Map',
    }
  }

  render() {
    return (
      <View>
        <Text>Map</Text>
      </View>
    );
  }
}

export default AppMap;