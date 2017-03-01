import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CodeOfConduct = ({ title, description }) => (
  <View>
    <Text style={styles.listTextHeader}>{title}</Text>
    <Text style={styles.bodyText}>{description}</Text>
  </View>
);

CodeOfConduct.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CodeOfConduct;
