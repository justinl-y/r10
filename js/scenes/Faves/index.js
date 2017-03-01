import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
// import styles from './styles';

class Faves extends Component {
  constructor() {
    super();
  }
  
  static route = {
    navigationBar: {
    title: 'Faves',
    }
  }

  render() {
    return (
      <View>
        <Text>Faves</Text>
      </View>
    );
  }
}

export default Faves;