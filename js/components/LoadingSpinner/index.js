import React from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './styles';

const componentName = () => (
  <ActivityIndicator
    style={styles.component}
    animating size={'large'}
    color={'black'}
  />
);

export default componentName;
