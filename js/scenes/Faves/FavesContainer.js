import React, { PropTypes } from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';
import styles from './styles';

const SpeakerContainer = ({ faves }) => (
  <ScrollView>
    <Text>Faves</Text>
  </ScrollView>
);

SpeakerContainer.defaultProps = {
  faves: PropTypes.arrayOf(PropTypes.object),
};

SpeakerContainer.propTypes = {
  faves: PropTypes.arrayOf(PropTypes.object),
};

export default SpeakerContainer;
