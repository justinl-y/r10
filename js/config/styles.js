import { Platform } from 'react-native';

export const colours = {
  mediumGrey: '#999999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a',
  white: '#ffffff',
  tabIconSelected: '#ffffff',
  tabIconDefault: '#999999',
};

export const typography = {
  baseSize: 16,
  smallSize: 12,
  ...Platform.select({
    ios: {
      fontMain: 'Montserrat',
    },
    android: {
      fontMain: 'Monserrat-Regular',
    },
  }),
  fontMainLight: 'Montserrat-Light',
};
