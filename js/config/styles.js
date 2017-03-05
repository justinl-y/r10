import { Platform } from 'react-native';

export const colours = {
  mediumGrey: '#999999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a',
  white: '#ffffff',

  brandWhite: '#ffffff',
  brandBlack: '#000000',
  brandPurple: '#9963ea',
  brandRed: '#cf392a',
  brandBlue: '#8797D6',
  textDark: '#999999',
  textLight: '#e6e6e6',
  borderDark: '#999999',
  borderLight: '#e6e6e6',
  tabIconSelected: '#ffffff',
  tabIconDefault: '#999999',
  navIconSelected: '#9963ea',
  navIconDefault: '#999999',
  selectedItemLight: '#e6e6e6',
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
