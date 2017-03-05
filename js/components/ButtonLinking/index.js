import React, { PropTypes } from 'react';
import { View, Text, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colours } from '../../config/styles';
import styles from './styles';

const ButtonLinking = ({ url, text }) => (
  <View style={styles.buttonContainer}>
    <View style={styles.button}>
      <LinearGradient
        start={{ x: 1.0, y: 0.5 }} end={{ x: 0, y: 1 }}
        colors={[colours.brandBlue, colours.brandPurple]}
        style={styles.linearGradient}
      >
        <Text
          style={styles.buttonText}
          onPress={() => Linking.openURL(url)}
        >
          {text}
        </Text>
      </LinearGradient>
    </View>
  </View>
);

ButtonLinking.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonLinking;
