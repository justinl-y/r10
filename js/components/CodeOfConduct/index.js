import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Animated } from 'react-native';
import { colours, typography } from '../../config/styles';
import styles from './styles';

class CodeOfConduct extends Component {
  constructor() {
    super();

    this.state = {
      displayItem: false,
      openItemIndicator: '+',
      spinValue: new Animated.Value(0),
    };
  }

  toggleComponent = () => {
    // change openItemIndicator
    this.state.openItemIndicator === '+' ? this.setState({ openItemIndicator: '-' }) : this.setState({ openItemIndicator: '+' });
    this.state.spinValue.setValue(0);

    // spin heading indicator
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 500,
        //easing: Easing.linear
      }
    ).start();

    // toggle item
    LayoutAnimation.easeInEaseOut();
    this.setState({ displayItem: !this.state.displayItem });
  }

  render() {
    const { title, description } = this.props;

    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    const headerIndicatorStyles = {
      listHeaderIndicator: {
        transform: [{ rotate: spin }],
        color: colours.brandPurple,
        fontFamily: typography.fontMain,
        fontSize: 14,
        fontWeight: 'bold',
      },
    }

    return (
      <View>
        <TouchableOpacity
          onPress={() => { this.toggleComponent(); }}
          activeOpacity={75 / 100}
        >
          <View style={styles.headerText}>
            <Animated.Text style={headerIndicatorStyles.listHeaderIndicator}>{` ${this.state.openItemIndicator} `}</Animated.Text>
            <Text style={styles.listHeaderText}>{title}</Text>
          </View>
          { this.state.displayItem &&
            <Text style={styles.bodyText}>{description}</Text>
          }
        </TouchableOpacity>
      </View>
    );
  }
}

CodeOfConduct.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CodeOfConduct;
