import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import styles from './styles';

const ButtonAction = ({ event, text }) => (
  <Text
    onPress={(e) => {
      e.preventDefault();
      event;
    }}
  >
    { text }
  </Text>
);

ButtonAction.propTypes = {
  // url: PropTypes.string.isRequired,
  // text: PropTypes.string.isRequired,
};

export default ButtonAction;
