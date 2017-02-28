import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import About from '../js/scenes/About';

// <View><Text>Welcome to React Native!</Text></View>

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
});

export default class R10 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <About />
      </View>
    );
  }
}
