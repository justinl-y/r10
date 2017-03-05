import React, { PropTypes } from 'react';
import { Text, Linking } from 'react-native';
import styles from './styles';

const ButtonLinking = ({ url, text }) => (
  <Text
    style={styles.component}
    onPress={() => Linking.openURL(url)}
  >
    {text}
  </Text>
);

ButtonLinking.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonLinking;
